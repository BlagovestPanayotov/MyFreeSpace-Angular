import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IDestination } from '../types/destination';
import { destinationEndpoints } from './endpoits';

@Injectable({
  providedIn: 'root',
})
export class DestinationService {
  constructor(private http: HttpClient) {}

  getAllDestinations() {
    return this.http.get<IDestination[]>(destinationEndpoints.getAll);
  }

  getDestinationById(id: string) {
    return this.http.get<IDestination>(destinationEndpoints.getById(id));
  }

  createDestination(
    name: string,
    country: string,
    description: string,
    img: string
  ) {
    return this.http.post<IDestination>(destinationEndpoints.create, {
      name,
      country,
      description,
      img,
    });
  }

  updateDestination(
    id: string,
    name: string,
    country: string,
    description: string,
    img: string
  ) {
    return this.http.put<IDestination>(destinationEndpoints.update(id), {
      name,
      country,
      description,
      img,
    });
  }

  deleteDestination(id: string) {
    return this.http.delete(destinationEndpoints.delete(id));
  }

  getUserDestinations(userId: string) {
    return this.http.get<IDestination[]>(
      destinationEndpoints.getUserDestinations(userId)
    );
  }
}
