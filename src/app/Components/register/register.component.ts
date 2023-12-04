import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { AuthenticationResponse } from 'src/app/models/authentication-response';
import { RegisterRequest } from 'src/app/models/register-request';
import {AuthenticationService} from "../../services/authentication.service";
import {VerificationRequest} from "../../models/verification-request";
import {timeout} from "rxjs";



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {

  registerRequest: RegisterRequest = {};
  authResponse: AuthenticationResponse = {};
  message = '';
  otpCode = '';

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {
  }

  registerUser() {
    this.message = '';
    this.authService.register(this.registerRequest)
      .subscribe({
        next: (response) => {
          if (response) {
            this.authResponse = response;
          } else {
            // inform the user
            this.message = 'Account created successfully\nYou will be redirected to the Login page in 3 seconds';
            setTimeout(() => {
              this.router.navigate(['login']);
            }, 3000)
          }
        }
      });

  }

  verifyTfa() {
    this.message='';
    const verifyRequest: VerificationRequest = {
      email:this.registerRequest.email,
      code:this.otpCode
    };
    this.authService.verifyCode(verifyRequest)
      .subscribe({
        next: (response: AuthenticationResponse) => {
            this.message = 'Account created successfully\nYou will be redirected to the login page 3 seconds'
            setTimeout(()=> {
                localStorage.setItem('token',response.accessToken as string);
                this.router.navigate(['login']);
            }, 3000);
        }
      })
  }
}
