import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { COUNTRIES_LIST } from 'src/app/shared/costants';
import { DestinationService } from 'src/app/shared/services/destination.service';
import { UserService } from 'src/app/shared/services/user.service';
import { IDestination } from 'src/app/shared/types/destination';
import { IUser } from 'src/app/shared/types/user';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  destination: IDestination = {
    _id: '',
    name: '',
    country: '',
    description: '',
    _ownerId: '',
    img: '',
    _createdOn: '',
  };

  user: IUser | null = null;
  countries: string[] = COUNTRIES_LIST;

  editMode: boolean = false;
  loading: boolean = true;
  apiError: string = '';
  deleteMsgDisplayed: boolean = false;

  constructor(
    private destinationService: DestinationService,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {}

  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  ngOnInit(): void {
    this.getDestination();
    this.getUser();
  }

  getDestination(): void {
    this.loading = true;
    const id = this.activatedRoute.snapshot.params['destId'];

    this.destinationService.getDestinationById(id).subscribe((dest) => {
      this.destination = dest;
      this.loading = false;
    });
  }

  getUser(): void {
    this.loading = true;
    this.userService.getUser().subscribe({
      next: (u: IUser) => {
        this.user = u;
        this.loading = false;
      },
      error: (err) => {
        this.user = null;
        this.loading = false;
      },
    });
  }

  toggleEditMode(): void {
    this.editMode = !this.editMode;
  }

  editDestination(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.loading = true;

    const { name, country, description, img } = form.value;

    this.destinationService
      .updateDestination(this.destination._id, name, country, description, img)
      .subscribe({
        next: (result) => {
          this.destination = result;
          this.toggleEditMode();
          this.loading = false;
        },
        error: (err) => {
          if (err.status === 403 && err.statusText === 'Forbidden') {
            this.apiError = 'You are NOT allowed to do that!!!';
            this.editMode = false;
            this.loading = false;
            window.scroll(0, 0);
            return;
          }
          console.log(err);
        },
      });
  }

  deleteMsgDisplayedToggle(): void {
    this.deleteMsgDisplayed = !this.deleteMsgDisplayed;
  }

  deleteDestination(): void {
    if (this.user?._id !== this.destination._ownerId) {
      window.scroll(0, 0);
      this.apiError = 'You are NOT allowed to do that!!!';
      return;
    }

    this.destinationService.deleteDestination(this.destination._id).subscribe({
      next: () => {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.router.navigate(['/dest/user-list']);
        }, 1500);
      },
      error: (err) => {
        this.loading = false;
        this.apiError = 'You are NOT allowed to do that!!!';
      },
    });
  }
}
