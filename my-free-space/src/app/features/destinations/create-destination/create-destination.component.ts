import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { COUNTRIES_LIST, MAX_IMAGE_SIZE } from 'src/app/shared/costants';
import { DestinationService } from 'src/app/shared/services/destination.service';

@Component({
  selector: 'app-create-destination',
  templateUrl: './create-destination.component.html',
  styleUrls: ['./create-destination.component.css'],
})
export class CreateDestinationComponent implements OnInit {
  form!: FormGroup;

  selectedFile: File | null = null;
  apiError: string = '';
  countries: string[] = COUNTRIES_LIST;

  loading: boolean = false;

  constructor(
    private destinationService: DestinationService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      country: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.minLength(20)]],
      fileInput: [null, [Validators.required]],
    });
  }

  onFileSelected(event: any) {
    const fileList: FileList | null = event.target.files;
    if (fileList && fileList.length > 0) {
      this.selectedFile = fileList[0];
    }
  }

  createDestination() {
    if (this.form.invalid) {
      return;
    }

    if (
      !this.selectedFile ||
      this.selectedFile.size > MAX_IMAGE_SIZE
    ) {
      this.apiError = 'The size of the image too big!';
      window.scroll(0, 0);
      return;
    }

    this.loading = true;

    const { name, country, description } = this.form.value;

    const formData = new FormData();
    formData.append('name', name);
    formData.append('country', country);
    formData.append('description', description);
    formData.append('fileInput', this.selectedFile, this.selectedFile.name);
    
    this.destinationService.createDestination(formData).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(['/dest/user-list']);
      },
      error: (err) => {
        this.apiError =
          'There is a problem and we are working on it. Sorry for the inconvenience.';
        window.scroll(0, 0);
        this.loading = false;
      },
    });
  }
}
