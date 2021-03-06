import { Component, OnInit, Output } from '@angular/core';
import { ListService } from './list.service';
import { DoList } from './do-list.model';
import { Subscription, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-do-list',
  templateUrl: './do-list.component.html',
  styleUrls: ['./do-list.component.css']
})
export class DoListComponent implements OnInit {
  list: DoList[];
  DoListChanged = new Subject<DoList[]>();
  private loudSub: Subscription;
  public headers: HttpHeaders;
  readonly rootURL = 'https://localhost:44361/api';
  // list$: Observable<DoList[]>;
  constructor(
    private ListService: ListService,
    private http: HttpClient, ) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  }

  ngOnInit() {
    this.ListService.getToDoList();
    this.ListService.list$.subscribe(data => {
      this.list = data;
    });
    // this.ListService.getToDoList().subscribe((list: DoList[]) => {
    //   //location.reload();
    //   //console.table(list);
    //   this.list = list;
    // });
    //console.log(this.list);


  }


}
