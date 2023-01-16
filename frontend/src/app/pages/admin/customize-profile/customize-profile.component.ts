import { Component, Input } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-customize-profile',
  templateUrl: './customize-profile.component.html',
  styleUrls: ['./customize-profile.component.scss']
})
export class CustomizeProfileComponent {

  webshopUsers: User[] = [];
  user!: User;
  modalOpen: boolean = false;
  modalAddNeeded: boolean = false;
  

  constructor(private userService: UserService) {}

  onAddClick(){
    this.modalAddNeeded = true;
    this.modalOpen = true;
  }

  onEditClick(user: User) {
    this.modalAddNeeded = false;
    this.user = user;
    this.modalOpen = true;
  }

  onDeleteClick(user: User) {
    this.user = user;
    this.userService.delete(user.id)
  }

  refreshWebshopUserList() {
    this.userService.getAll().subscribe({
      next: (data: User[]) => this.webshopUsers = data,
      error: () => console.error('u dun goofed')
    })
  }
  
  ngOnInit() {
    this.userService.getAll().subscribe({
      next: (data: User[]) => this.webshopUsers = data,
      error: () => console.error('u dun goofed')
    })
  }
}
