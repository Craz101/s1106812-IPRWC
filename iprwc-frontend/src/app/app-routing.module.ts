import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppService } from './services/app.service';
import { CartComponent } from './pages/cart/cart.component';
import { LoginScreenComponent } from './pages/home/login-screen/login-screen.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/admin/admin.component';
import { CustomizeProductComponent } from './pages/admin/customize-product/customize-product.component';
import { CustomizeProfileComponent } from './pages/admin/customize-profile/customize-profile.component';




const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'cart', component: CartComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'customizeProducts', component: CustomizeProductComponent },
  { path: 'customizeProfiles', component: CustomizeProfileComponent },
  { path: 'login', component: LoginScreenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule],
  providers: [AppService]
})
export class AppRoutingModule { }
