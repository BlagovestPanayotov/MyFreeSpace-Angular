import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IDestination } from '../types/destination';
import { destinationEndpoints } from './endpoits';

@Injectable({
  providedIn: 'root',
})
export class DestinationService {
  constructor(private http: HttpClient) {}

  getAllDestinations(name: string, country: string) {
    return this.http.get<IDestination[]>(
      destinationEndpoints.getAll(name, country)
    );
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

  getUserDestinations(userId: string, name: string, country: string) {
    return this.http.get<IDestination[]>(
      destinationEndpoints.getUserDestinations(userId, name, country)
    );
  }

  getCount() {
    return this.http.get<number>(destinationEndpoints.getCountDestiantions);
  }

  getRandomDestination(count: number) {
    const random = Math.floor(Math.random() * count);
    return this.http.get<IDestination[]>(destinationEndpoints.getListOfDestinations(random,1))
  }
}
