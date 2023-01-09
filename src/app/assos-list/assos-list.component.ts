import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ApiHelperService } from '../service/api-helper.service';

@Component({
  selector: 'app-assos-list',
  templateUrl: './assos-list.component.html',
  styleUrls: ['./assos-list.component.css']
})
export class AssosListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'info', 'delete'];
  dataSource!: MatTableDataSource<any>;
  constructor(
    private api: ApiHelperService,
    private router: Router
    ){}
  
  ngOnInit(): void {
    this.api.get({endpoint: '/associations'})
    .then(
      response => {
        this.dataSource = new MatTableDataSource(response)
        this.dataSource.filterPredicate =
          (data: any, filter: string) => data.id.toString().includes(filter)
        });
  }

  goToInfo(id: number): void {
    this.router.navigateByUrl('/association/' + id);
  }

  delete(id: number): void {
    this.api.delete({endpoint: '/associations/' + id})
      .then(response => {
        const index = this.dataSource.data.indexOf(response.id);
        this.dataSource.data.splice(index, 1);
        this.dataSource._updateChangeSubscription(); // <-- Refresh the datasource
      });
  }

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
