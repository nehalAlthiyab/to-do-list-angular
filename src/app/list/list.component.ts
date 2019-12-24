import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { UserService } from '../shared/user.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {
  pageIndex: number;
  pageSize: number;

  constructor(
   private route:ActivatedRoute,
   private router:Router,
   private userService:UserService
  
  ) { }

  ngOnInit() {
    this.userService.auth.next(true);
      this.router.navigate(['/list',1,5]);
    
  }

 
}