import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
    constructor(private router: Router) {}

    canActivate(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if (this.isLogin()) {
            return true;
        }
        return this.router.navigateByUrl('/login');
    }

    isLogin() {
        let token = window.localStorage.getItem('token');
        console.log(token)
        return token !== null;
    }

}
