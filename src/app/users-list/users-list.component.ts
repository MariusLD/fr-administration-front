import { Component, OnInit } from '@angular/core';
import { Observable, lastValueFrom } from 'rxjs';
import { ApiHelperService } from '../service/api-helper.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'lastname', 'firstname', 'age'];
  dataSource = [];
  constructor(private api: ApiHelperService){}
  
  ngOnInit(): void {
    this.api.get({endpoint: '/users'})
      .then(response => this.dataSource = response);
  }
}

