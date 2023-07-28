import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../types/user';
import { userEndpoints } from './endpoits';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http.post<IUser>(userEndpoints.login, { email, password });
  }

  register(email:string, username:string, password:string, country:string, gender:string){
    return this.http.post<IUser>(userEndpoints.register,{email, username, password, country, gender});
  }

  logout(){
    return this.http.get(userEndpoints.logout);
  }

  getUser(){
    return this.http.get(userEndpoints.getUser);
  }
}
