import { Component, OnInit, Output } from '@angular/core';
import { ListService } from './list.service';
import { DoList } from './do-list.model';
import { Subscription, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-do-list',
  templateUrl: './do-list.component.html',
  styleUrls: ['./do-list.component.css']
})
export class DoListComponent implements OnInit {
list:DoList[];
  private ListChangeSub:Subscription;
  public headers: HttpHeaders;
  readonly rootURL='https://localhost:44361/api';

  constructor(
    private ListService:ListService,
    private http:HttpClient,) {
      this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
     }

  ngOnInit() {
   
 this.ListService.getToDoList().subscribe((list:DoList[])=>{
    this.list=list;
  });
// console.log(this.list);
 //this.ListChangeSub=this.ListService.DoListChanged
 ///  .subscribe((list:DoList[])=>{
 //     this.list=list;
 // });
  //console.log(this.list);
 
 
  }


}
