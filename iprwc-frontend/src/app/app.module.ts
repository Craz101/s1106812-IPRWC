import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { CartComponent } from './pages/cart/cart.component';
import { LoginScreenComponent } from './pages/home/login-screen/login-screen.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductComponent } from './pages/products/product/product.component';
import { PricePipe } from './shared/price.pipe';
import { ModalComponent } from './components/modal/modal.component';
import { CustomizeProductComponent } from './pages/admin/customize-product/customize-product.component';
import { AdminComponent } from './pages/admin/admin.component';
import { CustomizeProfileComponent } from './pages/admin/customize-profile/customize-profile.component';
import { EditProductComponent } from './pages/admin/customize-product/edit-product/edit-product.component';
import { EditProfileComponent } from './pages/admin/customize-profile/edit-profile/edit-profile.component';
import { AddProductComponent } from './pages/admin/customize-product/add-product/add-product.component';
import { AddProfileComponent } from './pages/admin/customize-profile/add-profile/add-profile.component';
import { RegisterScreenComponent } from './pages/home/register-screen/register-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CartComponent,
    LoginScreenComponent,
    ProductComponent,
    CustomizeProductComponent,
    ProductsComponent,
    CartComponent,
    AdminComponent,
    ProfileComponent,
    CustomizeProfileComponent,
    HomeComponent,
    PricePipe,
    EditProductComponent,
    ModalComponent,
    EditProfileComponent,
    AddProductComponent,
    AddProfileComponent,
    RegisterScreenComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
