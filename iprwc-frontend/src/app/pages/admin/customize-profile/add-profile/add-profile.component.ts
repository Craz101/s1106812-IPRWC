import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WebshopUserService } from 'src/app/services/webshopUser.service';

@Component({
  selector: 'app-add-profile',
  templateUrl: './add-profile.component.html',
  styleUrls: ['./add-profile.component.scss']
})
export class AddProfileComponent {
  public addForm!: FormGroup;

  @Output()
  submitted = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private webshopUserService: WebshopUserService) {}

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      username: '',
      email: '',
      role: '',
      password: ''
    });
  }

  onSubmit(): void {
    if (!window.confirm('Do you wish to save this change?')) {
      return;
    }
    const webshopUser = {...this.addForm.value }
    this.webshopUserService.post(webshopUser).subscribe({
      next: () => this.submitted.emit(),
      error: () => console.error('u dun goofed')
    })
  }
}
