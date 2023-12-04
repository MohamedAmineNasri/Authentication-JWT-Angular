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


@NgModule({
  declarations: [AppComponent, RegisterComponent, LoginComponent,WelcomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    HttpClient
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
