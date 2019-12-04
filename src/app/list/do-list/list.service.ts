import { DoList } from './do-list.model'
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { MatPaginator } from '@angular/material/paginator';
//import { DataStorageService } from './data-storage.service';


//import { DataStorageService } from './data-storage.service';



@Injectable({ providedIn: 'root' })
export class ListService {





  readonly rootURL = 'https://localhost:44361/api';

  date: Date = new Date(new Date().getDate());
  endTask:boolean=false;
  completed:number;
  status:string;
  from:string;
  to:string;

  addTask(task: DoList) {
    console.log(task);
    console.log(this.rootURL + '/toDoList', task);
    this.http.post(this.rootURL + '/toDoList', task).subscribe((data) => {
      console.table(data);
      this.getToDoList();
    });

    //this.list.push(task);
    //console.log(task);
    // console.log(this.list);
    // this.DoListChanged.next(this.list.slice());
    // this.dataStorageService.PostToDoList();
  }

  getTask(index: number) {
    console.log(index);
    return this.http.get<DoList>(this.rootURL + '/toDoList/' + index);
  }


  deleteTask(index: number) {
    console.log(index);
    this.http.delete(this.rootURL + '/toDoList/' + index).subscribe((data) => {
      console.log(data);
      this.getToDoList();
    });
    //this.list.splice(index,1);
    // this.DoListChanged.next(this.list.slice());
  }

  setStatus(task: DoList) {
    
    this.from= this.checkDate(task.dateFrom);
    this.to= this.checkDate(task.dateTo);
    const date = this.checkDate(new Date()); 
    console.log(this.from);
    console.log(this.to);
    console.log(date);
    if(task.completed===0){
      if(this.to>date){
        if(this.from>date){
        
        task.status="not started";
      }
      else{
        task.status="started";
      }}else{
        task.status="ended";
        this.endTask=true;
      }
    }
    else{
      task.status="completed";
      this.endTask=true;
    }
     return task;
  }


  private todoListsubject = new Subject<DoList[]>();
  list$: Observable<DoList[]> = this.todoListsubject.asObservable();
  private tasksubject = new Subject<DoList>();
  task$: Observable<DoList> = this.tasksubject.asObservable();
  getToDoList() {
    return this.http.get<DoList[]>(this.rootURL + '/toDoList').subscribe(data => {
      data.map((task:DoList)=>{
      this.setStatus(task);
      });
      this.todoListsubject.next(data);
      
    });


  }

  updateTask(index: number, newTask: DoList) {
    
    console.log(newTask);
    console.log(this.rootURL + '/toDoList/' + index);
    this.http.put<DoList>(this.rootURL + '/toDoList/' + index, newTask).subscribe((data) => {
      console.log(data);
      this.getToDoList();
    });
    //this.list[index]=newTask;
    //this.DoListChanged.next(this.list.slice());
  }

  checkDate(date:Date) {
    const dateSendingToServer = new DatePipe('en-US').transform(date, 'MM/dd/yyyy')
    return dateSendingToServer;
  }
  constructor(
    private http: HttpClient,
    //private dataStorageService:DataStorageService

  ) {
  }
}