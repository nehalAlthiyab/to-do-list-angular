import { DoList } from './do-list/do-list.model'
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';



@Injectable({providedIn: 'root'})
export class ListService{
    DoListChanged = new Subject<DoList[]>();
    date:Date=new Date();
    private list:DoList[]=[
        new DoList('test',this.date.toLocaleDateString(),this.date.toLocaleDateString(),1),
        new DoList('test2',this.date.toLocaleDateString(),this.date.toLocaleDateString(),1),
    ];

    getList(){
        return this.list.slice();
        
    }

    addTask(task:DoList){
        this.list.push(task);
        this.DoListChanged.next(this.list.slice());
        
    }

    getTask(index:number){
        return this.list[index];
    }


    deleteTask(index:number){
        this.list.splice(index,1);
        this.DoListChanged.next(this.list.slice());
      }

      setList(list:DoList[]){
        this.list=list;
        this.DoListChanged.next(this.list.slice());
      }


      updateTask(index:number, newTask){
        this.list[index]=newTask;
        this.DoListChanged.next(this.list.slice());
      }
    constructor(
    ){}
}