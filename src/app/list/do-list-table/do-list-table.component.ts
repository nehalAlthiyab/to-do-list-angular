import { Component, OnInit, ViewChild, EventEmitter } from '@angular/core';
import { ListService } from '../do-list/list.service';
import { DoList } from '../do-list/do-list.model';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-do-list-table',
  templateUrl: './do-list-table.component.html',
  styleUrls: ['./do-list-table.component.css']
})
export class DoListTableComponent  implements OnInit{
  list: DoList[];
  task:DoList;
  pageIndex:number;
  @ViewChild(MatPaginator,{static:false}) paginator: MatPaginator;
  pageSize: any;
  isLastPage: boolean;
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private listService: ListService,
    private userService:UserService) {}
  displayedColumns: string[] = ['work', 'dateFrom', 'dateTo','status','action'];
  dataSource:MatTableDataSource<DoList>;

  ngOnInit() {
    this.userService.auth.next(true);
    console.log(this.userService.auth);
    this.route.params
.subscribe(
  (params:Params)=>{
    this.pageIndex=+params['id']-1;
    this.pageSize=+params['pageSize'];
   }
 );
 console.log(this.pageIndex);
      console.log(this.pageSize);
    this.listService.getToDoList();
    this.listService.list$.subscribe(data => {
      this.list = data;
      this.dataSource=new MatTableDataSource<DoList>(this.list);
      this.dataSource.paginator=this.paginator;
      this.paginator.pageIndex=this.pageIndex;
      this.paginator.pageSize=this.pageSize;
      console.table(this.list);
      console.log(this.pageIndex);
      console.log(this.pageSize);
    });
      
    //console.table(this.list);
  }
  onPaginateChange(event:PageEvent){
    this.pageIndex=event.pageIndex+1;
    this.pageSize=event.pageSize;
    this.router.navigate(['/list',this.pageIndex,this.pageSize]);
    console.log(event.pageIndex);
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


