import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListComponent } from './users-list/users-list.component';

import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component'; 

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenHttpInterceptor } from './interceptor/token.interceptor';
import { NavComponent } from './nav/nav.component';
import { ProfileComponent } from './profile/profile.component';
import { MatCardModule } from '@angular/material/card'
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    LoginComponent,
    NavComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatProgressBarModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenHttpInterceptor,
      multi: true,
        
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
