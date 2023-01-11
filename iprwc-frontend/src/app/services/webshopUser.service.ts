import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WebshopUser } from '../models/webshopUser.model';

@Injectable({
  providedIn: 'root'
})
export class WebshopUserService {

  constructor(private http: HttpClient) { }

  post(webshopUserData: WebshopUser): Observable<WebshopUser> {
   return this.http.post<WebshopUser>(`/api/webshopUser`, webshopUserData);
  }

  put(webshopUserData: WebshopUser): Observable<WebshopUser> {
    return this.http.post<WebshopUser>(`/api/webshopUser/${webshopUserData.id}`, webshopUserData);
   }

  getAll(): Observable<WebshopUser[]> {
    return this.http.get<WebshopUser[]>(`/api/webshopUser`);
  }

  get(webshopUserId: number): Observable<String> {
    return this.http.get<String>(`/api/webshopUser/${webshopUserId}`);
  }

  delete(webshopUserId: number): Observable<String> {
    return this.http.delete<String>(`/api/webshopUser/${webshopUserId}`);
  }
}
