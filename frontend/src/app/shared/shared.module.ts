import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricePipe } from './price.pipe';
import { ModalComponent } from './components/modal/modal.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PricePipe, ModalComponent, NavbarComponent],
  imports: [CommonModule, RouterModule],
  exports: [PricePipe, ModalComponent, NavbarComponent]
})
export class SharedModule {}
