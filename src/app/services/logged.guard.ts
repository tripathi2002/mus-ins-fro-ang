/* tslint: disble max-line-length */
import { Injectable } from '@angular/core';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
} from "@angular/router";
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';


@Injectable()
export class LoggedInGuard implements CanActivate {
    constructor(public authService: AuthService){}

    canActivate(
        next: ActivatedRouteSnapshot,
        status: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        const isLoggedIn = this.authService.isLoggedIn();
        console.log('canActivate', isLoggedIn);
        return isLoggedIn;
    }
}