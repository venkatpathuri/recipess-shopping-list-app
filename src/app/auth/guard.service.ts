import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AuthserService } from './authser.service';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {

  constructor(private auth:AuthserService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):any {
   this.auth.user.pipe(map(res=>{
     return res?false:true;

     
   })
   
   )

  
  }


}
