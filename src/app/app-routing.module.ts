import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { DashboardComponent } from './main-layout/dashboard/dashboard.component';
import { LoggedInGuard } from './services/logged.guard';
import { NavbarComponent } from './main-layout/navbar/navbar.component';
import { ForgotPasswpordComponent } from './authentication/forgot-passwpord/forgot-passwpord.component';
import { AddProductComponent } from './catalog/add-product/add-product.component';
import { AddCategoryComponent } from './catalog/add-category/add-category.component';
import { ProductListComponent } from './catalog/product-list/product-list.component';
import { CategoryListComponent } from './catalog/category-list/category-list.component';
import { BrandListComponent } from './catalog/brand-list/brand-list.component';
import { AddBrandComponent } from './catalog/add-brand/add-brand.component';
import { OrdersComponent } from './catalog/orders/orders.component';
import { CustomerListComponent } from './catalog/customer-list/customer-list.component';

const routes: Routes = [

  // { path:'navbar', component: NavbarComponent },
  { path:'forgot-password', component: ForgotPasswpordComponent },
  { path:'', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'product', component: AddProductComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: 'category', component: AddCategoryComponent },
  { path: 'category-list', component: CategoryListComponent },
  { path: 'brand', component: AddBrandComponent },
  { path: 'brand-list', component: BrandListComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'customer', component: CustomerListComponent },
  
  { 
    path: 'dashboard', 
    component: DashboardComponent, 
    // canActivate: [LoggedInGuard],
  },
  { path: '**', redirectTo: 'login'},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
