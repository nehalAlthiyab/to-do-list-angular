import { Component, OnInit } from '@angular/core';
import { ListService } from '../../do-list/list.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
ToDoListForm:FormGroup
  constructor(
    private ListService:ListService,
    private route:ActivatedRoute,
   private router:Router) { }

  ngOnInit() {

    let Task='';
    let from='';
    let to='';

    this.ToDoListForm=new FormGroup({
      'Work':new FormControl(Task,Validators.required),
      'DateFrom':new FormControl(from,Validators.required),
      'DateTo':new FormControl(to,Validators.required)
    })
  }

  onSubmit(){
    this.ListService.addTask(this.ToDoListForm.value);
    this.ToDoListForm.reset();
    this.router.navigate(['/'])
    .then(() => {
      window.location.reload();
     });
  }

  onCancel(){
    this.router.navigate(['../'],{relativeTo:this.route});
  }

}
