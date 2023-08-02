import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DestinationService } from 'src/app/shared/services/destination.service';
import { UserService } from 'src/app/shared/services/user.service';
import { IDestination } from 'src/app/shared/types/destination';
import { IUser } from 'src/app/shared/types/user';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
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

  editMode: boolean = false;
  apiError: string = '';

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
    const id = this.activatedRoute.snapshot.params['destId'];

    this.destinationService.getDestinationById(id).subscribe((dest) => {
      this.destination = dest;
    });
  }

  getUser(): void {
    this.userService.getUser().subscribe({
      next: (u: IUser) => {
        this.user = u;
      },
      error: (err) => {
        this.user = null;
      },
    });
  }

  toggleEditMode(): void {
    console.log(this.editMode);
    
    this.editMode = !this.editMode;
  }

  editDestination(form: NgForm) {
    console.log('works');

    if (form.invalid) {
      return;
    }

    const { name, cuntry, description, img } = form.value;
  }
}
