import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  @Input()
  name: string = '';
  @Input()
  open = true;
  @Output()
  closeModalEvent = new EventEmitter<void>();

  constructor() {}

  closeModal() {
    this.closeModalEvent.emit();
  }
}
