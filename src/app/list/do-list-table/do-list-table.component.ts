import { Component, OnInit, ViewChild } from '@angular/core';
import { ListService } from '../do-list/list.service';
import { DoList } from '../do-list/do-list.model';
import { DatePipe } from '@angular/common';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-do-list-table',
  templateUrl: './do-list-table.component.html',
  styleUrls: ['./do-list-table.component.css']
})
export class DoListTableComponent implements OnInit {
  list: DoList[];
  task:DoList;
  @ViewChild(MatPaginator,{static:false}) paginator: MatPaginator;
  constructor(private listService: ListService) { }
  displayedColumns: string[] = ['work', 'dateFrom', 'dateTo','status'];
  dataSource:DoList[];
  ngOnInit() {
    this.listService.getToDoList();
    this.listService.list$.subscribe(data => {
      this.list = data;
      
      console.table(this.list);
       
      this.dataSource=this.list;
    });
    
    
    
    //console.table(this.list);
  }
   
   
  

}


