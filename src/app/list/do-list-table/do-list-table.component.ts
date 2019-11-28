import { Component, OnInit, ViewChild } from '@angular/core';
import { ListService } from '../do-list/list.service';
import { DoList } from '../do-list/do-list.model';
import { DatePipe } from '@angular/common';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-do-list-table',
  templateUrl: './do-list-table.component.html',
  styleUrls: ['./do-list-table.component.css']
})
export class DoListTableComponent implements OnInit {
  list: DoList[];
  task:DoList;
  @ViewChild(MatPaginator,{static:false}) paginator: MatPaginator;
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private listService: ListService) { }
  displayedColumns: string[] = ['work', 'dateFrom', 'dateTo','status','action'];
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
   
   onEdit(index:number){
     console.log(index);
     this.router.navigate(['','edit',index],{relativeTo:this.route});
   }
  
   onDelete(index:number){
    const ans = confirm('are you sure you want to delete this task');
   if(ans){
    this.listService.deleteTask(index);
   }
  }
  onComplete(index:number,task:DoList){
    const ans = confirm('are you sure you complete this task');
   if(ans){
     task.completed=1;
      this.listService.updateTask(index,task);
   }
  }
}


