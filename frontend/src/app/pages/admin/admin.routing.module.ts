import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CustomizeProductComponent } from './customize-product/customize-product.component';
import { CustomizeProfileComponent } from './customize-profile/customize-profile.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'products', component: CustomizeProductComponent },
  { path: 'profiles', component: CustomizeProfileComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule],
  providers: [],
})
export class AdminRoutingModule {}
