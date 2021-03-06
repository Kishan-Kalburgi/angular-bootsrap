import { PricingComponent } from './pages/pricing/pricing.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { AdminMainContentComponent } from './pages/admin/admin-main-content/admin-main-content.component';
import { AddInventoryComponent } from './pages/admin/add-inventory/add-inventory.component';
import { RegistrationComponent } from './pages/admin/registration/registration.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'pricing', component: PricingComponent},
  {path: 'inventory', component: AdminMainContentComponent},
  {path: 'addInventory', component: AddInventoryComponent},
  {path: 'editInventory/:id', component: AddInventoryComponent}
  // {path: 'inventory', canActivate: [AuthGuard], component: AdminMainContentComponent},
  // {path: 'addInventory', canActivate: [AuthGuard], component: AddInventoryComponent},
  // {path: 'editInventory/:id', canActivate: [AuthGuard], component: AddInventoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
