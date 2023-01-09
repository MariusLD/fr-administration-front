import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../service/token-storage.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  
  isLogged : boolean
  inProfile : boolean

  constructor(
    private service: TokenStorageService,
    private router: Router
  ){
    this.isLogged = false
    this.inProfile = true
  }

  logout(): void {
    this.service.clear();
    this.router.navigateByUrl("/login");
  }

  usersList(): void {
    this.router.navigateByUrl("/users");
  }

  profile(): void {
    this.router.navigateByUrl("/profile");
  }

  assosList(): void {
    this.router.navigateByUrl("/associations");
  }

  getUrl(): string {
    return this.router.url;
  }
}
