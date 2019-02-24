import { Service } from './../../service.service';
import { Component, OnInit } from '@angular/core';
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

  constructor(
    private router: Router,
    private loginService: Service,
    public authService: AuthService) { }

  ngOnInit() {
  }

  onSignin(signinForm: NgForm) {
    if (signinForm.valid) {
      if (signinForm.value.userID === 'admin' && signinForm.value.pwd === '1234') {
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
}
