import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DoList } from '../../do-list/do-list.model';
import { ListService } from '../../do-list/list.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tdform',
  templateUrl: './tdform.component.html',
  styleUrls: ['./tdform.component.css']
})
export class TDFormComponent implements OnInit {
  @ViewChild('f',{static:false}) slForm:NgForm;
  constructor(
    private ListSarvice:ListService,
    private route:ActivatedRoute,
   private router:Router) { }

  ngOnInit() {
  }

  onSubmit(form:NgForm){
    const value=form.value;
    const newTask=new DoList (value.Work,value.DateFrom,value.DateTo,0);
    this.ListSarvice.addTask(newTask);
    this.slForm.reset();
  }

  onCancel(){
    this.router.navigate(['../'],{relativeTo:this.route});
  }

}
