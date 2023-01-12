import { Component, Input } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  @Input()
  webshopUser!: User[];

  constructor(private webshopUserService: UserService) {}

  ngOnInit() {
    this.webshopUserService.getAll().subscribe({
      next: (data: User[]) => this.webshopUser = data,
      error: () => console.error('foutje')
    })
  }
}
