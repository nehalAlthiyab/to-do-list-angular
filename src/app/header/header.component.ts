import { Component, OnInit, OnDestroy, OnChanges, Input } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy {
isAuth:boolean=false;
userAuth:Subscription;
  constructor(
    private router: Router,
    private userService:UserService
  ) { }
  ngOnInit() {
    this.userAuth = this.userService.auth.subscribe(auth => {
      console.log(auth);
      this.isAuth =auth;
    });
  }

  ngOnDestroy(){
    this.userAuth.unsubscribe();
  }

  onLogout() {
    localStorage.removeItem('token');
    this.userService.auth.next(false);
    this.router.navigate(['/user/login']);
  }
  

}
