import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy {

  constructor(
    public posts: PostsService
    ) { }

  Username = "vendeg";

  private activatedUser: Subscription;

  ngOnInit() {
    
    // Bejelentkezett felhasználó névváltoztatása

    this.activatedUser=this.posts.UserName
    .subscribe(data=>{
      this.Username = data
    });
  }
  
  ngOnDestroy(){
    this.activatedUser.unsubscribe();
  }

}
