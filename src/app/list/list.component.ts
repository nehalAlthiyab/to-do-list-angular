import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';


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
  
  ) { }

  ngOnInit() {
      this.router.navigate(['/list',1,5]);
    
  }

 
}