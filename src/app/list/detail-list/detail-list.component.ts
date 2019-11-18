import { Component, OnInit, Input } from '@angular/core';
import { DoList } from '../do-list/do-list.model';


@Component({
  selector: 'app-detail-list',
  templateUrl: './detail-list.component.html',
  styleUrls: ['./detail-list.component.css']
})
export class DetailListComponent implements OnInit {
@Input() list:DoList;
@Input() index:number;
  constructor() { }

  ngOnInit() {
   
  }

}
