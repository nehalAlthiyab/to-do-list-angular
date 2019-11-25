import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ListService } from '../do-list/list.service';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DoList } from '../do-list/do-list.model';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.css']
})
export class EditListComponent implements OnInit,OnDestroy {
  @ViewChild('f',{static:false}) slForm:NgForm;
  id:number;
  sub:Subscription;
  Task:string;
     from:Date;
     to:Date;
     completed:number;
  constructor(
    private ListService:ListService,
    private route:ActivatedRoute,
   private router:Router
  ) { }

  ngOnInit() {
  this.sub=this.route.params
.subscribe(
  (params:Params)=>{
    this.id=+params['id'];
   }
 );

  

    this.ListService.getTask(this.id).subscribe((task:DoList)=>{
      console.log(task.work);
      this.Task=task.work.toString();
    this.from=task.dateFrom;
    this.to=task.dateTo;
    this.completed=task.completed;
    });
    

    
  }

  onCancel(){
    this.router.navigate(['/'],{relativeTo:this.route});
  }

  onSubmit(){
    const newTask=new DoList (this.Task,this.to,this.from,this.completed);
    this.ListService.updateTask(this.id,newTask);
    this.router.navigate(['/'],{relativeTo:this.route});
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
