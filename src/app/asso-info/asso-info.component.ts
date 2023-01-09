import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiHelperService } from '../service/api-helper.service';

@Component({
  selector: 'app-asso-info',
  templateUrl: './asso-info.component.html',
  styleUrls: ['./asso-info.component.css']
})
export class AssoInfoComponent {
  name!: string;

  listUser: any[] = [];

  constructor(
    private api: ApiHelperService,
    private route: ActivatedRoute
  ) { }
  
  ngOnInit(): void {
    this.api.get({endpoint: '/associations/' + this.route.snapshot.paramMap.get('id')})
      .then(response => {
        this.name = response.name;
        this.listUser = response.users})
      .catch(error => +error.status === 401 ? alert('Token Expired') : console.log('Error'));
  }
}
