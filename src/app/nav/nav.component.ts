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
    private route: Router
  ){
    this.isLogged = false
    this.inProfile = true
  }

  logout(): void {
    this.service.clear();
    this.route.navigateByUrl("/login");
  }

  usersList(): void {
    this.route.navigateByUrl("/users");
  }

  profile(): void {
    this.route.navigateByUrl("/profile");
  }

  assosList(): void {
    this.route.navigateByUrl("/associations");
  }

  getUrl(): string {
    return this.route.url;
  }
}
