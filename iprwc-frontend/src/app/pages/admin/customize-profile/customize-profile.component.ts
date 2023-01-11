import { Component, Input } from '@angular/core';
import { WebshopUser } from 'src/app/models/webshopUser.model';
import { WebshopUserService } from 'src/app/services/webshopUser.service';

@Component({
  selector: 'app-customize-profile',
  templateUrl: './customize-profile.component.html',
  styleUrls: ['./customize-profile.component.scss']
})
export class CustomizeProfileComponent {

  webshopUsers: WebshopUser[] = [];
  selectedWebshopUser!: WebshopUser;
  modalOpen: boolean = false;
  modalAddNeeded: boolean = false;

  constructor(private webshopUserService: WebshopUserService) {}

  onAddClick(){
    this.modalAddNeeded = true;
    this.modalOpen = true;
  }

  onEditClick(selectedWebshopUser: WebshopUser) {
    this.modalAddNeeded = false;
    this.selectedWebshopUser = selectedWebshopUser;
    this.modalOpen = true;
  }

  refreshWebshopUserList() {
    this.webshopUserService.getAll().subscribe({
      next: (data: WebshopUser[]) => this.webshopUsers = data,
      error: () => console.error('u dun goofed')
    })
  }
  
  ngOnInit() {
    this.webshopUserService.getAll().subscribe({
      next: (data: WebshopUser[]) => this.webshopUsers = data,
      error: () => console.error('u dun goofed')
    })
  }
}
