import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { WebshopUserService } from 'src/app/services/webshopUser.service';
@Component({
  selector: 'app-register-screen',
  templateUrl: './register-screen.component.html',
  styleUrls: ['./register-screen.component.scss']
})
export class RegisterScreenComponent {

  credentials = {email: '', password: ''};
  error = "";

  registerForm: FormGroup = this.fb.group({
    username: ['', [Validators.required]],
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private userService: WebshopUserService,
    private router: Router,
    private http: HttpClient
  ) {}
  
  register() {console.log(this.registerForm.value)
  }

}
