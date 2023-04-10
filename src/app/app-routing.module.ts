import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoggedInGuard } from './services/logged.guard';
import { NavbarComponent } from './navbar/navbar.component';
import { ForgotPasswpordComponent } from './forgot-passwpord/forgot-passwpord.component';

const routes: Routes = [

  { path:'navbar', component: NavbarComponent },
  { path:'forgot-password', component: ForgotPasswpordComponent },
  { path:'', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { 
    path: 'dashboard', 
    component: DashboardComponent, 
    canActivate: [LoggedInGuard],
  },
  { path: '**', redirectTo: 'login'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
