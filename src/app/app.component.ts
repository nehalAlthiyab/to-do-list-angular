import { Component, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'toDolist';
@Output() isAuth:boolean;
  ngOnInit(){
    if (localStorage.getItem('token') != null)
    this.isAuth=true;
  }
}
