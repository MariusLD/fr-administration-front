import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiHelperService } from '../service/api-helper.service';
import { TokenStorageService } from '../service/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  registering: boolean = false;
  
  constructor(
    private router: Router,
    private api: ApiHelperService,
    private tokenStorageService: TokenStorageService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.registering = data['registering'];
    })
  }


    
  login(): void {
    const username: string = (document.getElementById('username') as HTMLInputElement).value;
    const password: string = (document.getElementById('password') as HTMLInputElement).value;
    this.api.post({endpoint: '/auth/login', data: { username, password }})
      .then(response => {
        this.tokenStorageService.save(username, response.access_token)
        if (this.tokenStorageService.isLogged()) {
          this.router.navigateByUrl('/profile');
        }})
      .catch(error => +error.status === 401 ? alert('Invalid credentials') : console.log('Error'));
  }

  register(): void {
    this.router.navigateByUrl('/register');
  }

  confirmRegistration(): void {
    const firstname: string = (document.getElementById('firstname') as HTMLInputElement).value;
    const lastname: string = (document.getElementById('lastname') as HTMLInputElement).value;
    const age: number = +(document.getElementById('age') as HTMLInputElement).value;
    const password: string = (document.getElementById('password') as HTMLInputElement).value;

    if (firstname === '' || lastname === '' || age === 0 || password === '') {
      alert('Please fill all fields');
    }
    else {
      this.api.post({endpoint: '/users', data: { firstname: firstname, lastname: lastname, age: age, password: password }})
        .then(response => {
          alert('Registration successful\n Your username is: ' + response.id);
          this.router.navigateByUrl('/login');
        })
    }
  }
}
