import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  modalLogIn: boolean = false;
  modalRegister: boolean = false;
  modalOpen: boolean = false;

  onLoginClick(){
    this.modalRegister = false
    this.modalLogIn = true;
    this.modalOpen = true;
    console.log(this.modalLogIn, this.modalRegister)
  }

  onRegisterClick() {
    this.modalLogIn = false;
    this.modalRegister = true;
    this.modalOpen = true;
    console.log(this.modalLogIn, this.modalRegister)
  }

}
