import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user.model';


@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const auth: User = this.authService.userSubject$.value;

    if (auth !== null) {
      req = req.clone({
        setHeaders: {
          Authorization: auth.key
        }
      });
    }

    return next.handle(req);
  }
}
