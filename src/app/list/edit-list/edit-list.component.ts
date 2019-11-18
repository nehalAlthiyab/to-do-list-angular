import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ListService } from '../list.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.css']
})
export class EditListComponent implements OnInit {
  id:number;
  ToDoListForm:FormGroup
  constructor(
    private ListService:ListService,
    private route:ActivatedRoute,
   private router:Router
  ) { }

  ngOnInit() {
    this.route.params
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
  }

  onCancel(){}

  onSubmit(){}

}
