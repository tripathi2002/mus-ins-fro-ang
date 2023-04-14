import { API_URL, BASE_URL } from "../api";
import { AuthService } from "./auth.service";
import { CategoryService } from "./category.service";
import { BrandService } from "./brand.service";
import { CustomerService } from "./customer.service";


export const Injector: Array<any> = [
    { provide: AuthService, useClass: AuthService },
    { provide: CategoryService, useClass: CategoryService },
    { provide: BrandService, useClass: BrandService },
    { provide: CustomerService, useClass: CustomerService },

    { provide: API_URL, useValue: API_URL }, 
    { provide: BASE_URL, useValue: BASE_URL }, 
]
