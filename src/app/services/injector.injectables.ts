import { API_URL } from "../api";
import { AuthService } from "./auth.service";
import { CategoryService } from "./category.service";


export const Injector: Array<any> = [
    { provide: AuthService, useClass: AuthService },
    { provide: CategoryService, useClass: CategoryService },
    { provide: API_URL, useValue: API_URL }, 
]
