import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoListComponent } from './list/do-list/do-list.component';
import { DetailListComponent } from './list/detail-list/detail-list.component';
import { EditListComponent } from './list/edit-list/edit-list.component';
import { AddTaskComponent } from './list/add-task/add-task.component';
import { ListComponent } from './list/list.component';
import { HeaderComponent } from './header/header.component';
import { TDFormComponent } from './list/add-task/tdform/tdform.component';
import { ReactiveFormComponent } from './list/add-task/reactive-form/reactive-form.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DoListTableComponent } from './list/do-list-table/do-list-table.component';
import { MatTableModule } from '@angular/material/table';
import { CdkColumnDef } from '@angular/cdk/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { UserService } from './shared/user.service';
import { AuthInterceptor } from './auth/auth.interceptor';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    DoListComponent,
    DetailListComponent,
    EditListComponent,
    AddTaskComponent,
    ListComponent,
    HeaderComponent,
    TDFormComponent,
    ReactiveFormComponent,
    DoListTableComponent,
    RegistrationComponent,
    LoginComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    ToastrModule.forRoot({
      progressBar: true
    }),
    //AngularMaterialModule,
    
    
  ],
  providers: [CdkColumnDef,
    UserService, {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
