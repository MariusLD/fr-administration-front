import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Observable, lastValueFrom  } from 'rxjs';
import { TokenStorageService } from '../service/token-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  firstName : string;
  lastName : string;
  age : number;
  constructor(private http: HttpClient,
    private service: TokenStorageService){
      this.firstName = ""
      this.lastName = ""
      this.age = 0;
    }

  ngOnInit(): void {
    const resquest: Observable<any> = this.http.get('http://localhost:3000/users/'+this.service.getId(), { observe: 'response' });
    lastValueFrom(resquest).then(response => {
      this.firstName = response.body.firstname;
      console.log(this.firstName);
      this.lastName = response.body.lastname;
      console.log(this.lastName);
      this.age = response.body.age;
      console.log(this.age);
    });
  }
}
