import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  post(user: User): Observable<User> {
   return this.http.post<User>(`/api/user`, user);
  }

  put(user: User): Observable<User> {
    return this.http.post<User>(`/api/user/${user.id}`, user);
   }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(`/api/user`);
  }

  get(userId: number): Observable<String> {
    return this.http.get<String>(`/api/user/${userId}`);
  }

  delete(userId: number): Observable<String> {
    return this.http.delete<String>(`/api/user/${userId}`);
  }
}
