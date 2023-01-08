import { Component, OnInit } from '@angular/core';
import { ApiHelperService } from '../service/api-helper.service';
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

  backupFirstname!: string;
  backupLastname!: string;
  backupAge!: number;

  newpassword: string = '';
  confpassword: string = '';

  isUpdating: boolean = false;
  isUpdatingPsswd: boolean = false;

  constructor(
    private service: TokenStorageService,
    private api: ApiHelperService
  ) { }

  ngOnInit(): void {
    this.api.get({endpoint: '/users/' + this.service.getId()})
      .then(response => {
        this.firstname = response.firstname;
        this.lastname = response.lastname;
        this.age = response.age;})
      .catch(error => +error.status === 401 ? alert('Token Expired') : console.log('Error'));
  }

  update(): void {
    this.isUpdating = true;
    this.backupFirstname = this.firstname;
    this.backupLastname = this.lastname;
    this.backupAge = this.age;
  }

  confirm(): void {
    this.api.put({endpoint: '/users/' + this.service.getId(), data: {firstname: this.firstname,
        lastname: this.lastname,
        age: this.age}})
      .then(response => {
        this.backupAge = this.age;
        this.backupFirstname = this.firstname;
        this.backupLastname = this.lastname;
        this.isUpdating = false;})
      .catch(error => +error.status === 401 ? alert('Token Expired') : console.log('Error'));
  }

  discard(): void {
    this.isUpdating = false;
    this.firstname = this.backupFirstname;
    this.lastname = this.backupLastname;
    this.age = this.backupAge;
    this.discardPsswd();
  }

  updatePsswd(): void {
    this.isUpdatingPsswd = true;
  }

  confirmPsswd(): void {
    if (this.newpassword !== '' && this.newpassword === this.confpassword) {
      this.isUpdatingPsswd = false;
      this.api.put({endpoint: '/users/' + this.service.getId(), data: {password: this.newpassword}})
        .then(response => {
          this.isUpdatingPsswd = false;
          this.newpassword = '';
          this.confpassword = '';})
        .catch(error => +error.status === 401 ? alert('Token Expired') : console.log('Error'));
    }
    else if (this.newpassword === '') {
      alert('Empty password, please enter a password');
    }
    else {
      alert('Passwords do not match');
    }
  }

  discardPsswd(): void {
    this.isUpdatingPsswd = false;
    this.newpassword = '';
    this.confpassword = '';
  }

}
