import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() { }
  
// A felhasználó adatai
  public UserName = new Subject<string>();
  public isAdmin = false;
  public isLogged = false;

}
