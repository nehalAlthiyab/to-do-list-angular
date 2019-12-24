import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailListComponent } from './list/detail-list/detail-list.component';
import { EditListComponent } from './list/edit-list/edit-list.component';
import { AddTaskComponent } from './list/add-task/add-task.component';
import { ListComponent } from './list/list.component';
import { TDFormComponent } from './list/add-task/tdform/tdform.component';
import { ReactiveFormComponent } from './list/add-task/reactive-form/reactive-form.component';
import { DoListTableComponent } from './list/do-list-table/do-list-table.component';
import { AuthGuard } from './auth/auth.guard';
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  {path:'',component:ListComponent,canActivate:[AuthGuard]},
  {path:'list/:id/:pageSize',component:DoListTableComponent},
      {path:'new',component:AddTaskComponent},
      {path:'TD',component:TDFormComponent},
      {path:'Reactive',component:ReactiveFormComponent},
      {path:'edit/:id',component:EditListComponent},
      { path: 'user/registration', component: RegistrationComponent },
      { path: 'user/login', component: LoginComponent }
      
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
