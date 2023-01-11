import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WebshopUser } from 'src/app/models/webshopUser.model';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent {

  @Input()
  webshopUser!: WebshopUser;
  editForm!: FormGroup;
  tempPassword!: string;
  constructor(private formBuilder: FormBuilder) {}

  ngOnChanges(): void {
    this.editForm = this.formBuilder.group({
      username: this.webshopUser.username,
      email: this.webshopUser.email,
      role: this.webshopUser.role,
      password: this.tempPassword
    });
  }
  
  onSubmit(): void {
    // Process checkout data here
  }

}
