import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { AppService } from './services/app.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Twisted Exchange';
  constructor(private app: AppService, private http: HttpClient, private router: Router) 
  {
    this.app.authenticate(undefined, undefined);
  }
  logout() {
    this.http.post('logout', {}).pipe(
      finalize(() => {
        this.app.authenticated = false;
        this.router.navigateByUrl('/login');
      })
    ).subscribe();
  }
}
