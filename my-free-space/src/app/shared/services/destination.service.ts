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

  createDestination(name: string, country: string, description: string, _ownerId: string, img: string) {
    return this.http.post<IDestination>(
      destinationEndpoints.create, {name, country, description, _ownerId, img});
  }

  updateDestination(id:string, name: string, country: string, description: string, _ownerId: string, img: string){
    return this.http.put<IDestination>(
      destinationEndpoints.update(id), {name, country, description, _ownerId, img});
  }

  deleteDestination(id:string){
    return this.http.delete(id);
  }
}

// "_id": 0,
// "name": "Salar de Uyuni",
// "country": "Bolivia",
// "description": "The worlds largest salt flat, it creates a mirror effect after the rain.",
// "_ownerId": "35c62d76-8152-4626-8712-eeb96381bea8",
// "img": "/assets/destination-images/salar-de-uyuni.webp",
// "_createdOn": 1689698702962
