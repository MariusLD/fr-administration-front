import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiHelperService } from '../service/api-helper.service';
import { TokenStorageService } from '../service/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private router: Router,
    private api: ApiHelperService,
    private tokenStorageService: TokenStorageService,
  ) {}
    
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
}
