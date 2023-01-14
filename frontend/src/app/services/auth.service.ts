import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";
import { BehaviorSubject, map } from "rxjs";
import environment from "src/environments/environment";
import { User } from "../models/user.model";

@Injectable({ providedIn: 'root' })
export class AuthService {
  userSubject$: BehaviorSubject<User>;
  jwtHelperService: JwtHelperService;

  constructor(
    private http: HttpClient
  ) {
    this.userSubject$ = new BehaviorSubject({
      id: 0,
      username: '',
      email: '',
      role: '',
      key: ''
    });
    this.jwtHelperService = new JwtHelperService();
  }

  signup(username: string, email: string, password: string) {
    return this.http.post(environment.api + '/api/user', {
      username: username,
      email: email,
      password: password,
    });
  }

  login(email: string, password: string) {
    return this.http
      .post(environment.api + `/api/login`, { email, password }, { observe: 'response' })
      .pipe(
        map((response: HttpResponse<any>) => {
          const token = response.headers.get('Authorization') as string;
          const decodedToken = this.jwtHelperService.decodeToken(token);

          const user: User = {
            username: decodedToken.sub,
            email: decodedToken.email,
            role: decodedToken.role,
            id: decodedToken.id,
            key: token.includes('Bearer') ? token : `Bearer ${token}`,
          };

          localStorage.setItem('user', JSON.stringify(user));

          this.userSubject$.next(user);
        })
      );
  }
}