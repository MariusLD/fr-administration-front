import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiHelperService } from '../service/api-helper.service';

@Component({
  selector: 'app-assos-list',
  templateUrl: './assos-list.component.html',
  styleUrls: ['./assos-list.component.css']
})
export class AssosListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name'];
  dataSource!: MatTableDataSource<any>;
  constructor(private api: ApiHelperService){}
  
  ngOnInit(): void {
    this.api.get({endpoint: '/associations'})
    .then(
      response => {
        this.dataSource = new MatTableDataSource(response)
        this.dataSource.filterPredicate =
          (data: any, filter: string) => data.id.toString().includes(filter)
        });
  }

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
