import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminRoutingModule } from './admin.routing.module';
import { EditProductComponent } from './customize-product/edit-product/edit-product.component';
import { CustomizeProductComponent } from './customize-product/customize-product.component';
import { EditProfileComponent } from './customize-profile/edit-profile/edit-profile.component';
import { CustomizeProfileComponent } from './customize-profile/customize-profile.component';
import { AddProductComponent } from './customize-product/add-product/add-product.component';
import { AddProfileComponent } from './customize-profile/add-profile/add-profile.component';

@NgModule({
  declarations: [
    AdminComponent,
    AddProductComponent,
    EditProductComponent,
    CustomizeProductComponent,
    AddProfileComponent,
    EditProfileComponent,
    CustomizeProfileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
