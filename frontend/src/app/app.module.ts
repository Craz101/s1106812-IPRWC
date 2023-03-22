import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { CartComponent } from './pages/cart/cart.component';
import { LoginScreenComponent } from './pages/home/login-screen/login-screen.component';
import { ProductsComponent } from './pages/products/products.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/products/product/product.component';
import { RegisterScreenComponent } from './pages/home/register-screen/register-screen.component';
import { AuthenticationInterceptor } from './shared/authentication-interceptor';
import { AdminModule } from './pages/admin/admin.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    LoginScreenComponent,
    ProductComponent,
    ProductsComponent,
    CartComponent,
    HomeComponent,
    RegisterScreenComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AdminModule,
    SharedModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
