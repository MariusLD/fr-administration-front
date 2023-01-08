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

  newpassword: string = '';
  confpassword: string = '';

  isUpdating: boolean = false;
  isUpdatingPsswd: boolean = false;

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
    }).catch(error => +error.status === 401 ? alert('Token Expired') : console.log('Error'));
  }

  update(): void {
    this.isUpdating = true;
  }

  confirm(): void {
    const request: Observable<any> = this.http.put('http://localhost:3000/users/' + this.service.getId(), {
      firstname: this.firstname,
      lastname: this.lastname,
      age: this.age
    }, { observe: 'response' });
    lastValueFrom(request).then(response => {
      this.isUpdating = false;
    }).catch(error => +error.status === 401 ? alert('Token Expired') : console.log('Error'));
  }

  updatePsswd(): void {
    this.isUpdatingPsswd = true;
  }
  confirmPsswd(): void {
    if (this.newpassword !== '' && this.newpassword === this.confpassword) {
      this.isUpdatingPsswd = false;
      const request: Observable<any> = this.http.put('http://localhost:3000/users/' + this.service.getId(), {
        password: this.newpassword
      }, { observe: 'response' });
      lastValueFrom(request).then(response => {
        this.isUpdatingPsswd = false;
        this.newpassword = '';
        this.confpassword = '';
      }).catch(error => +error.status === 401 ? alert('Token Expired') : console.log('Error'));
    }
    else {
      alert('Passwords do not match');
    }
  }

}
