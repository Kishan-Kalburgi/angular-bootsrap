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
  wrongCode = false;
  email = '';
  pwd = '';
  recaptcha = '';

  /* code for 2FA */
  code: string;

  // isSignup = false;
  // isSignin = true;

  constructor(
    private router: Router,
    public authService: AuthService,
    private service: Service) { }

  ngOnInit() {
  }

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
  }

  onSignin(signinForm: NgForm) {
    console.log(signinForm.value);
    if (signinForm.valid) {
      this.service.signinUser(signinForm.value)
        .subscribe(res => {
          this.code = res['data'];
          this.authService.login()
            .subscribe(() => {
            localStorage.setItem('isLoggedIn', 'true');
          });
        },
        err => {
          this.errorMsg2 = true;
          this.errorMsg = false;
        });
    } else {
      this.errorMsg = true;
      this.errorMsg2 = false;
    }
  }

  onCodeSubmit(codeForm: NgForm) {
    if (codeForm.value.codeInput === this.code) {
      console.log(codeForm.value);
      this.router.navigate(['/inventory']);
    } else {
      console.log('Invalide code');
      this.wrongCode = true;
    }
  }

}
