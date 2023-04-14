import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatSidenavModule} from '@angular/material/sidenav';

import { LoggedInGuard } from './services/logged.guard';
import { Injector } from './services/injector.injectables';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswpordComponent } from './forgot-passwpord/forgot-passwpord.component';
import { AddProductComponent } from './catalog/add-product/add-product.component';
import { AddCategoryComponent } from './catalog/add-category/add-category.component';
import { ProductListComponent } from './catalog/product-list/product-list.component';
import { CategoryListComponent } from './catalog/category-list/category-list.component';
import { BrandListComponent } from './catalog/brand-list/brand-list.component';
import { AddBrandComponent } from './catalog/add-brand/add-brand.component';
import { OrdersComponent } from './catalog/orders/orders.component';
import { CustomerListComponent } from './catalog/customer-list/customer-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    DashboardComponent,
    SidebarComponent,
    ForgotPasswpordComponent,
    AddProductComponent,
    AddCategoryComponent,
    ProductListComponent,
    CategoryListComponent,
    BrandListComponent,
    AddBrandComponent,
    OrdersComponent,
    CustomerListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,  // for bootstrap
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,

  ],
  providers: [
    LoggedInGuard,
    Injector
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
