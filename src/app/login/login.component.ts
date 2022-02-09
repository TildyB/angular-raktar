import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PostsService } from '../posts.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  bejelentkezes: FormGroup

  constructor(
    public posts: PostsService, 
    private http:HttpClient,
    private router: Router) 
    { }


  ngOnInit(): void {

    // Bejelentkezés, adatbekérés a user-től

    this.bejelentkezes = new FormGroup(
      {'email': new FormControl(null,Validators.email),
        'password': new FormControl(null),}
    )
  }

  login(){

  // Bejelentkezés utáni ellenőrzés mock api-val, és Post servicebe adatküldés
  
    this.http.get('https://61fba8aa3f1e34001792c544.mockapi.io/teszt/user')
    .subscribe(data =>{
      for (const key in data) {
          if(this.bejelentkezes.value.email === data[key].email && this.bejelentkezes.value.password === data[key].jelszo){
            this.posts.UserName.next(data[key].nev)
            this.posts.isAdmin = data[key].isAdmin;
            this.posts.isLogged=true;
            localStorage.setItem('username',data[key].nev)
            localStorage.setItem('admin',data[key].isAdmin),
            localStorage.setItem('loggedIn', 'true')
            this.router.navigateByUrl('targyak')
            console.log(localStorage)
            
          }
      }
    })
   
  }

}
