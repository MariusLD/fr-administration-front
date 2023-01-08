import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiHelperService } from '../service/api-helper.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent {

  firstname!: string;
  lastname!: string;
  age!: number;

  constructor(
    private api: ApiHelperService,
    private route: ActivatedRoute
  ) { }
  
  ngOnInit(): void {
    this.api.get({endpoint: '/users/' + this.route.snapshot.paramMap.get('id')})
      .then(response => {
        this.firstname = response.firstname;
        this.lastname = response.lastname;
        this.age = response.age;})
      .catch(error => +error.status === 401 ? alert('Token Expired') : console.log('Error'));
  }
}
