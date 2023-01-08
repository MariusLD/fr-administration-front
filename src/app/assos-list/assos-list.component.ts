import { Component, OnInit } from '@angular/core';
import { ApiHelperService } from '../service/api-helper.service';

@Component({
  selector: 'app-assos-list',
  templateUrl: './assos-list.component.html',
  styleUrls: ['./assos-list.component.css']
})
export class AssosListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name'];
  dataSource = [];
  constructor(private api: ApiHelperService){}
  
  ngOnInit(): void {
    this.api.get({endpoint: '/associations'})
      .then(response => this.dataSource = response);
  }
}
