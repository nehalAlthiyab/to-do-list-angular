import { DoList } from './do-list.model'
import { Injectable } from '@angular/core';
import { Subject, Observable, observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
//import { DataStorageService } from './data-storage.service';


//import { DataStorageService } from './data-storage.service';



@Injectable({ providedIn: 'root' })
export class ListService {





  private headers: HttpHeaders;
  readonly rootURL = 'https://localhost:44361/api';

  date: Date = new Date(new Date().getDate());
  private list: DoList[];
  private task: DoList;


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

  setList(list: DoList[]) {
    console.log(list);
    this.list = list;
    //console.table(this.list);
    //this.DoListChanged.next(this.list.slice());
  }


  private todoListsubject = new Subject<DoList[]>();
  list$: Observable<DoList[]> = this.todoListsubject.asObservable();
  getToDoList() {
    return this.http.get<DoList[]>(this.rootURL + '/toDoList').subscribe(data => {
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
  constructor(
    private http: HttpClient,
    //private dataStorageService:DataStorageService

  ) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  }
}