import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { TokenStorageService } from '../service/token-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  firstname!: string;
  lastname!: string;
  age!: number;
  password!: string;

  isUpdating: boolean = false;

  constructor(
    private http: HttpClient,
    private service: TokenStorageService,
  ) { }

  ngOnInit(): void {
    const resquest: Observable<any> = this.http.get('http://localhost:3000/users/' + this.service.getId()
      , { observe: 'response' });
    lastValueFrom(resquest).then(response => {
      this.firstname = response.body.firstname;
      this.lastname = response.body.lastname;
      this.age = response.body.age;
      this.password = response.body.password;
    });
  }

  update(): void {
    this.isUpdating = true;
  }

  confirm(): void {
    const request: Observable<any> = this.http.put('http://localhost:3000/users/' + this.service.getId(), {
      firstname: this.firstname,
      lastname: this.lastname,
      age: this.age,
      // password: this.password
    }, { observe: 'response' });
    lastValueFrom(request).then(response => {
      this.isUpdating = false;
    });
  }

}
