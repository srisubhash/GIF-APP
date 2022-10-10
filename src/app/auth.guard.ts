import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthserviceService } from './authservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthserviceService, private router: Router){}
  
  canActivate(): boolean{
    if(this.authService.isUserLoggedIn()){
      return true;
    }
    else{
      this.router.navigate(['/Login']);
      return false;
    }
  }

  
}
