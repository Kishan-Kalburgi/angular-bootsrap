import { Service } from './../../service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private loginService: Service,
    public authService: AuthService) { }

  ngOnInit() {
  }

  onSignin() {
    // this.loginService.login();
    // this.router.navigate(['/dashboard']);
    this.authService.login().subscribe(() => {
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/dashboard']);
    });
  }

}
