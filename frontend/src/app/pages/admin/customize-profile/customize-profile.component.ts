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
  selectedWebshopUser!: User;
  modalOpen: boolean = false;
  modalAddNeeded: boolean = false;

  constructor(private webshopUserService: UserService) {}

  onAddClick(){
    this.modalAddNeeded = true;
    this.modalOpen = true;
  }

  onEditClick(selectedWebshopUser: User) {
    this.modalAddNeeded = false;
    this.selectedWebshopUser = selectedWebshopUser;
    this.modalOpen = true;
  }

  refreshWebshopUserList() {
    this.webshopUserService.getAll().subscribe({
      next: (data: User[]) => this.webshopUsers = data,
      error: () => console.error('u dun goofed')
    })
  }
  
  ngOnInit() {
    this.webshopUserService.getAll().subscribe({
      next: (data: User[]) => this.webshopUsers = data,
      error: () => console.error('u dun goofed')
    })
  }
}
