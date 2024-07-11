import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, CanActivateChildFn, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

export const AuthGuard: CanActivateFn & CanActivateChildFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
):
    Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree => 
{
    const authService = inject(AuthService);
    const router = inject(Router);
    
    return authService.IsAuthenticated().then(isAuthenticated => {
        return isAuthenticated ? true : router.createUrlTree(['/']);
    });
};

export const AuthGuardChild: CanActivateChildFn = (
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
):
    Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree => 
{
    return AuthGuard(childRoute, state);
};
