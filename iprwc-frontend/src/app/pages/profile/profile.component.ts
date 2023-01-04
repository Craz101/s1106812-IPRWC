import { Component, Input } from '@angular/core';
import { WebshopUserService } from 'src/app/services/webshopUser.service';
import { WebshopUser } from '../../models/webshopUser.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  @Input()
  webshopUser!: WebshopUser[];

  constructor(private webshopUserService: WebshopUserService) {}

  ngOnInit() {
    this.webshopUserService.getAll().subscribe({
      next: (data: WebshopUser[]) => this.webshopUser = data,
      error: () => console.error('foutje')
    })
  }
}
