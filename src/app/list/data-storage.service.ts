import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, tap} from'rxjs/operators';
import { ListService } from './list.service';
import { DoList } from './do-list/do-list.model';

@Injectable({providedIn: 'root'})
export class DataStorageService{
readonly rootURL='https://localhost:44361/api/';

constructor(
    private http:HttpClient,
    private ListService:ListService
    ){}

    PostToDoList(){
    const list =this.ListService.getList();
    this.http.post(this.rootURL+'/ToDoList', list);
}

}