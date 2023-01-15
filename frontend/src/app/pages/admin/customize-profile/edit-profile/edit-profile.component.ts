import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent {

  @Input()
  user!: User;
  editForm!: FormGroup;
  tempPassword!: string;
  constructor(private formBuilder: FormBuilder) {}

  ngOnChanges(): void {
    this.editForm = this.formBuilder.group({
      username: this.user.username,
      email: this.user.email,
      role: this.user.role,
      password: this.tempPassword
    });
  }
  
  onSubmit(): void {
    // Process checkout data here
  }

}
