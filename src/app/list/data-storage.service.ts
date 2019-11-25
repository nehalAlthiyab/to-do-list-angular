import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, tap} from'rxjs/operators';
import { DoList } from './do-list/do-list.model';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class DataStorageService{
    readonly rootURL='https://localhost:44361/api';

constructor(
    private http:HttpClient,
    ){}

getToDoList(): Observable<DoList[]>{
    return this.http.get<DoList[]>(this.rootURL+'/ToDoList');
}


}