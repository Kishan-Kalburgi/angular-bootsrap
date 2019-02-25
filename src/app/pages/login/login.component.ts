import { Service } from './../../service.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMsg = false;
  errorMsg2 = false;
  userID = '';
  pwd = null;
  recaptcha = '';
  // isSignup = false;
  // isSignin = true;

  constructor(
    private router: Router,
    public authService: AuthService) { }

  ngOnInit() {
  }

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
  }

  onSignin(signinForm: NgForm) {
    if (signinForm.valid) {
      if (signinForm.value.userID === 'admin@ub.com' && signinForm.value.pwd === '123456') {
        this.authService.login().subscribe(() => {
          localStorage.setItem('isLoggedIn', 'true');
          this.router.navigate(['/inventory']);
        });
      } else {
        this.errorMsg2 = true;
        this.errorMsg = false;
      }
    } else {
      this.errorMsg = true;
      this.errorMsg2 = false;
    }
  }

  onisSignup() {
    // this.isSignup = true;
  }
}
