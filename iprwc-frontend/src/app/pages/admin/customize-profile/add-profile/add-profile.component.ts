import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-profile',
  templateUrl: './add-profile.component.html',
  styleUrls: ['./add-profile.component.scss']
})
export class AddProfileComponent {
  public addForm!: FormGroup;
  public error: string = '';

  @Output()
  submitted = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private webshopUserService: UserService) {}

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      username: '',
      email: '',
      role: '',
      password: ''
    });
  }

  onSubmit(): void {
    this.error = '';
    if (!window.confirm('Do you wish to save these changes?')) {
      return;
    }
    const webshopUser = {...this.addForm.value }
    this.webshopUserService.post(webshopUser).subscribe({
      next: () => this.submitted.emit(),
      error: (e) => {
        this.error = e.error.error;
      }
    })
  }
}
