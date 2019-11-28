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
export class EditListComponent implements OnInit, OnDestroy {
  @ViewChild('f', { static: false }) slForm: NgForm;
  id: number;
  sub: Subscription;
  Task: string;
  from: Date;
  to: Date;
  completed: number;
  constructor(
    private ListService: ListService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.sub = this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
        }
      );



    this.ListService.getTask(this.id).subscribe((task: DoList) => {
      this.Task = task.work.toString();
      this.from = task.dateFrom;
      this.to = task.dateTo;
      this.completed = task.completed;
    });



  }

  onCancel() {
    this.router.navigate(['/']);
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newTask = new DoList(value.Task, value.dateFrom, value.dateTo, value.completed);
    newTask.setId(this.id);
    this.ListService.updateTask(this.id, newTask);
    this.router.navigate(['/'])
     /* .then(() => {
        window.location.reload();
      }); */
      this.ListService.getTask(this.id).subscribe((task: DoList) => {
        this.Task = task.work.toString();
        this.from = task.dateFrom;
        this.to = task.dateTo;
        this.completed = task.completed;
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
