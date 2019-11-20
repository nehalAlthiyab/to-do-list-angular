import { Component, OnInit, Input } from '@angular/core';
import { DoList } from '../do-list/do-list.model';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { ListService } from '../list.service';


@Component({
  selector: 'app-detail-list',
  templateUrl: './detail-list.component.html',
  styleUrls: ['./detail-list.component.css']
})
export class DetailListComponent implements OnInit {
@Input() list:DoList;
@Input() index:number;
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private LisrService:ListService
  ) { }

  ngOnInit() {
   console.log(this.index);
  }

  onEditTask(index:number){
    this.router.navigate(['','edit',index],{relativeTo:this.route});
  }

  onEditDelete(index:number){
    this.LisrService.deleteTask(index);
    this.router.navigate(['/']);
  }

}
