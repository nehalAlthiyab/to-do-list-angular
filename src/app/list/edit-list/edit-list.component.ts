import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ListService } from '../list.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.css']
})
export class EditListComponent implements OnInit,OnDestroy {
  id:number;
  sub:Subscription
  ToDoListForm:FormGroup
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

 let Task='';
    let from='';
    let to='';

    const list =this.ListService.getTask(this.id);
    Task=list.Work;
    from=list.DateFrom;
    to=list.DateTo;

    this.ToDoListForm=new FormGroup({
      'Work':new FormControl(Task,Validators.required),
      'DateFrom':new FormControl(from,Validators.required),
      'DateTo':new FormControl(to,Validators.required)
    })

    console.log(list);
  }

  onCancel(){
    this.router.navigate(['/'],{relativeTo:this.route});
  }

  onSubmit(){
    this.ListService.updateTask(this.id,this.ToDoListForm.value);
    this.onCancel();
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
