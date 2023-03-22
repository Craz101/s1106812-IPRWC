import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";
import { BehaviorSubject, map, Subject } from "rxjs";
import environment from "src/environments/environment";
import { User } from "../models/user.model";

@Injectable({ providedIn: 'root' })
export class AuthService {
  userSubject$: BehaviorSubject<User>;
  jwtHelperService: JwtHelperService;
  error: string | undefined;
  success = new Subject();

  constructor(private http: HttpClient) {
    this.userSubject$ = new BehaviorSubject({
      id: 0,
      username: '',
      email: '',
      role: '',
      key: '',
    });
    this.jwtHelperService = new JwtHelperService();

    this.loginOnRefresh();
  }

  loginOnRefresh() {
    const jsonUser = localStorage.getItem('user');
    if (!jsonUser) return;

    const user = JSON.parse(jsonUser);
    this.userSubject$.next(user);
  }

  signup(username: string, email: string, password: string) {
    return this.http.post(environment.api + '/api/user', {
      username: username,
      email: email,
      password: password,
    });
  }

  login(email: string, password: string) {
    const headers = new HttpHeaders().append(
      'Content-Type',
      'application/json'
    );

    this.http
      .post<any>(
        environment.api + `/api/login`,
        { email, password },
        { headers, observe: 'response' }
      )
      .subscribe({
        next: (resp) => {
          const token = resp?.body?.authorization ?? '';
          const decodedToken = this.jwtHelperService.decodeToken(token);

          const user: User = {
            username: decodedToken.sub,
            email: decodedToken.email,
            role: decodedToken.role,
            id: decodedToken.id,
            key: token.includes('Bearer') ? token : `Bearer ${token}`,
          };

          this.userSubject$.next(user);
          localStorage.setItem('user', JSON.stringify(user));
          this.success.next(true);
        },
        error: (err) => {
          switch(err.status) {
            case 403: 
              this.error = 'E-mail or password incorrect.';
              break;
            default: 
              this.error = 'An error occurred.';
          }
        } 
      });
  }
}
