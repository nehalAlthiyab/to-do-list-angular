import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailListComponent } from './list/detail-list/detail-list.component';
import { EditListComponent } from './list/edit-list/edit-list.component';
import { AddTaskComponent } from './list/add-task/add-task.component';
import { ListComponent } from './list/list.component';
import { TDFormComponent } from './list/add-task/tdform/tdform.component';
import { ReactiveFormComponent } from './list/add-task/reactive-form/reactive-form.component';


const routes: Routes = [
  {path:'',component:ListComponent},
      {path:'new',component:AddTaskComponent},
      {path:'TD',component:TDFormComponent},
      {path:'Reactive',component:ReactiveFormComponent},
      {path:'edit/:id',component:EditListComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
