import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  listAsso: any[] = [];

  constructor(
    private api: ApiHelperService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  
  ngOnInit(): void {
    this.api.get({endpoint: '/users/' + this.route.snapshot.paramMap.get('id')})
      .then(response => {
        this.firstname = response.firstname;
        this.lastname = response.lastname;
        this.age = response.age;})
      .catch(error => +error.status === 401 ? alert('Token Expired') : console.log('Error'));

    this.api.get({endpoint: '/users/' + this.route.snapshot.paramMap.get('id') + '/associations'})
      .then(response => { this.listAsso = response })
      .catch(error => +error.status === 401 ? alert('Token Expired') : console.log('Error: '+ error));
  }

  goToAssoInfo(id: number): void {
    this.router.navigateByUrl('/association/' + id);
  }
}
