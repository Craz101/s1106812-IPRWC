import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  modalLogIn: boolean = false;
  modalRegister: boolean = false;
  modalOpen: boolean = false;
  success = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.success.subscribe({
      next: (result) => {
        if(result === true) {
          this.modalOpen = false;
          this.success = true;
        }
      }
    });
  }

  onLoginClick(){
    this.modalRegister = false
    this.modalLogIn = true;
    this.modalOpen = true;
  }

  onRegisterClick() {
    this.modalLogIn = false;
    this.modalRegister = true;
    this.modalOpen = true;
  }

}
