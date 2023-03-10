import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsersListComponent } from './users-list/users-list.component';
import { AuthGuard } from './guards/auth.guard';
import { ProfileComponent } from './profile/profile.component';
import { AssosListComponent } from './assos-list/assos-list.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { AssoInfoComponent } from './asso-info/asso-info.component';

const routes: Routes = [
  { path : 'login', component:  LoginComponent,  data: {registering: false} },
  { path: 'users', component: UsersListComponent, canActivate: [AuthGuard]},
  { path: 'user/:id', component: UserInfoComponent, canActivate: [AuthGuard]},
  { path: 'associations', component: AssosListComponent, canActivate: [AuthGuard]},
  { path: 'association/:id', component: AssoInfoComponent, canActivate: [AuthGuard]},
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  { path: 'register', component: LoginComponent, data: {registering: true} },
  { path: '', redirectTo: 'login', 'pathMatch': 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }