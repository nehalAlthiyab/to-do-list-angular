import { Component, OnInit, Input } from '@angular/core';
import { DoList } from '../do-list/do-list.model';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { ListService } from '../do-list/list.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-detail-list',
  templateUrl: './detail-list.component.html',
  styleUrls: ['./detail-list.component.css']
})
export class DetailListComponent implements OnInit {
@Input() list:DoList;
@Input() index:number;
endTask:boolean=false;
task:DoList;
completed:number;
status:string;
from:string;
to:string;

  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private ListService:ListService
  ) { }

  ngOnInit() {
   this.from= this.checkDate(this.list.dateFrom);
   this.to= this.checkDate(this.list.dateTo);
    if(this.list.completed===0){
      if(this.to>new Date().toLocaleDateString()){
        if(this.from>new Date().toLocaleDateString()){
        
        this.status="not started";
      }
      else{
        this.status="started";
      }}else{
        this.status="ended";
        this.endTask=true;
      }
    }
    else{
      this.status="completed";
      this.endTask=true;
    }
  }

  onEditTask(index:number){
    this.router.navigate(['','edit',index],{relativeTo:this.route});
  }

  onEditDelete(index:number){
    const ans = confirm('are you sure you want to delete this task');
   if(ans){
    this.ListService.deleteTask(index);
    location.reload();
   }
  }
  onComplete(index:number){
    const ans = confirm('are you sure you complete this task');
   if(ans){
    this.ListService.getTask(index).subscribe((task:DoList)=>{
      const updateTask=new DoList (task.work,task.dateFrom,task.dateTo,1);
      updateTask.setId(index);
      console.log(updateTask);
      this.ListService.updateTask(index,updateTask);
      location.reload();
    });
   }
  }
  checkDate(date:Date) {
    const dateSendingToServer = new DatePipe('en-US').transform(date, 'MM/dd/yyyy')
    return dateSendingToServer;
  }
}
