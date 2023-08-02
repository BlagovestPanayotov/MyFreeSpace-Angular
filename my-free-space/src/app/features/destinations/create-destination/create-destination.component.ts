import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DestinationService } from 'src/app/shared/services/destination.service';

@Component({
  selector: 'app-create-destination',
  templateUrl: './create-destination.component.html',
  styleUrls: ['./create-destination.component.css'],
})
export class CreateDestinationComponent {
  apiError: string = '';

  constructor(
    private destinationService: DestinationService,
    private router: Router
  ) {}

  createDestination(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const { name, cuntry, description, img } = form.value;

    this.destinationService
      .createDestination(name, cuntry, description, img)
      .subscribe({
        next: () => {
          this.router.navigate(['/dest/user-list']);
        },
        error: (err) => {
          if ((err.status = 400)) {
            this.apiError =
              'There is a problem and we are working on it. Sorry for the inconvenience.';
            return;
          }
          this.apiError = err.message;
        },
      });
  }
}
