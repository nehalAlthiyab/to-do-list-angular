import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';
import { DoList } from './do-list.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-do-list',
  templateUrl: './do-list.component.html',
  styleUrls: ['./do-list.component.css']
})
export class DoListComponent implements OnInit {
  list:DoList[];
  private ListChangeSub:Subscription;
  constructor(
    private ListService:ListService) { }

  ngOnInit() {
    this.list= this.ListService.getList();
    this.ListChangeSub=this.ListService.DoListChanged
    .subscribe((list:DoList[])=>{
      this.list=list;
    });
  }


}
