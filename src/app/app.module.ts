import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WelcomeComponent } from './Components/welcome/welcome.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {AuthenticationService} from "./services/authentication.service";
import {JwtModule} from "@auth0/angular-jwt";


@NgModule({
  declarations: [AppComponent, RegisterComponent, LoginComponent,WelcomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('token');
        },
        allowedDomains: ['localhost:8089'], // Adjust the port based on your server
        disallowedRoutes: ['localhost:8089/api/auth/logout'], // Adjust the port based on your server
      },
    }),
  ],
  providers: [
    HttpClient,
    AuthenticationService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
