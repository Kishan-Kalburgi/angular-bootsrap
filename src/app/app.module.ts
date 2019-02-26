import { AngularMaterial } from './angular-material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';

// reCAPTCHA
import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';


// import components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { AdminMainContentComponent } from './pages/admin/admin-main-content/admin-main-content.component';
import { AddInventoryComponent } from './pages/admin/add-inventory/add-inventory.component';
import { HttpClientModule } from '@angular/common/http';
import { Service } from './service.service';
import { RegistrationComponent } from './pages/admin/registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    PricingComponent,
    AdminMainContentComponent,
    AddInventoryComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    LayoutModule,
    AngularMaterial,
    HttpClientModule,
    RecaptchaModule,
    RecaptchaFormsModule
  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
