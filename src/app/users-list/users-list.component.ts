import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ApiHelperService } from '../service/api-helper.service';
import { TokenStorageService } from '../service/token-storage.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'lastname', 'firstname', 'age', 'info', 'delete'];
  dataSource! : MatTableDataSource<any>;

  constructor(
    private api: ApiHelperService,
    private route: Router,
    public service: TokenStorageService
    ){}
  
  ngOnInit(): void {
    this.api.get({endpoint: '/users'})
      .then(
        response => {
          this.dataSource = new MatTableDataSource(response)
          this.dataSource.filterPredicate =
            (data: any, filter: string) => data.id.toString().includes(filter)
          });
  }

  goToInfo(id: number): void {
    this.route.navigateByUrl('/user/' + id);
  }

  delete(id: number): void {
    this.api.delete({endpoint: '/users/' + id})
      .then(response => this.ngOnInit());
  }

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  
}

