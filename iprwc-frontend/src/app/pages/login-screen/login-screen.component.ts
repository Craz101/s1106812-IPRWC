import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';
import { WebshopUserService } from 'src/app/services/webshopUser.service';

@Component({
  templateUrl: './login-screen.component.html'

})
export class LoginScreenComponent {

  credentials = {username: '', password: ''};
  error = "";

  loginForm: FormGroup = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private userService: WebshopUserService,
    private router: Router
  ) {}

  
  login() {console.log(this.loginForm.value)
  }

}