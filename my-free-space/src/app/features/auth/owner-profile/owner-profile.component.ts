import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { COUNTRIES_LIST, MAX_IMAGE_SIZE } from 'src/app/shared/costants';
import { UserService } from 'src/app/shared/services/user.service';
import { IUser } from 'src/app/shared/types/user';

@Component({
  selector: 'app-profile',
  templateUrl: './owner-profile.component.html',
  styleUrls: ['./owner-profile.component.css'],
})
export class OwnerProfileComponent implements OnInit {
  form!: FormGroup;

  user: IUser | undefined;
  loading: boolean = true;
  apiError: string = '';

  selectedFile: File | null = null;
  editMode: boolean = false;
  countries: string[] = COUNTRIES_LIST;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.userService.getUser().subscribe({
      next: (u) => {
        this.user = u;
        this.loading = false;
      },
      error: (err) => {
        this.user = undefined;
        this.loading = false;
        throw err;
      },
    });
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
    this.loading = false;
    this.form = this.formBuilder.group({
      email: [this.user?.email, [Validators.required]],
      username: [
        this.user?.username,
        [Validators.required, Validators.minLength(5)],
      ],
      accountname: [this.user?.accountName, []],
      country: [this.user?.country, [Validators.required]],
      gender: [this.user?.gender, [Validators.required]],
      fileInput: null,
      removeImage: false,
      // name: ['', [Validators.required, Validators.minLength(5)]],
      // description: ['', [Validators.required, Validators.minLength(20)]],
    });
  }

  onFileSelected(event: any) {
    const fileList: FileList | null = event.target.files;
    if (fileList && fileList.length > 0) {
      this.selectedFile = fileList[0];
    }
  }

  editUser() {
    if (this.form.invalid) {
      return;
    }

    if (this.selectedFile && this.selectedFile.size > MAX_IMAGE_SIZE) {
      this.apiError = 'The size of the image too big!';
      window.scroll(0, 0);
      return;
    }

    this.loading = true;

    const { email, username, country, gender, accountname, removeImage } =
      this.form.value;
    console.log(this.form.value);

    const formData = new FormData();
    formData.append('email', email);
    formData.append('username', username);
    formData.append('accountname', accountname);
    formData.append('country', country);
    formData.append('gender', gender);
    formData.append('removeImage', removeImage);
    if (!removeImage) {
      if (this.selectedFile) {
        formData.append('fileInput', this.selectedFile, this.selectedFile.name);
      }
    }

    this.userService.updateUser(formData).subscribe({
      next: (result) => {
        this.user = result;
        this.toggleEditMode();
        this.loading = false;
      },
      error: (err) => {
        if (err.status === 403 || err.status === 401) {
          window.scroll(0, 0);
          this.apiError = err.error.errors[0];
          this.loading = false;
          return;
        }
        throw err;
      },
    });
  }
}
