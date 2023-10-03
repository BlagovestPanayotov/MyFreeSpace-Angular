import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { COUNTRIES_LIST } from 'src/app/shared/costants';
import { DestinationService } from 'src/app/shared/services/destination.service';
import { SearchService } from 'src/app/shared/services/search.service';

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

  maxSizeImageInBytes: number = 10 * 1024 * 1024;

  constructor(
    private destinationService: DestinationService,
    private searchService: SearchService,
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
    // if (this.form.invalid) {
    //   return;
    // }

    if (
      !this.selectedFile ||
      this.selectedFile.size > this.maxSizeImageInBytes // TO DO -> error handling for image size
    ) {
      return;
    }

    const { name, country, description, fileInput } = this.form.value;

    const formData = new FormData();
    formData.append('name', name);
    formData.append('country', country);
    formData.append('description', description);
    formData.append('fileInput', this.selectedFile, this.selectedFile.name);

    this.destinationService.createDestination(formData).subscribe({
      next: () => {
        // this.router.navigate(['/dest/user-list']);
        // this.searchService.setAllListPage(1);
        // this.searchService.setUserListPage(1);
      },
      error: (err) => {
        this.apiError =
          'There is a problem and we are working on it. Sorry for the inconvenience.';
        window.scroll(0, 0);
      },
    });
  }
}
