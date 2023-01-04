import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WebshopUser } from '../models/webshopUser.model';

@Injectable({
  providedIn: 'root'
})
export class WebshopUserService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<WebshopUser[]> {
    return this.http.get<WebshopUser[]>(`/assets/webshopUser.json`);
  }
}
