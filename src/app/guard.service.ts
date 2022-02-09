import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { PostsService } from './posts.service';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {

  constructor( 
    private posts: PostsService
    ){}

  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): 
    boolean | 
    UrlTree | 
    Observable<boolean | 
    UrlTree> | 
    Promise<boolean | 
    UrlTree> {
      
         return !this.posts.isLogged
  } 
}
