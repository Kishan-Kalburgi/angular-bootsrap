import { Service } from './../service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(
    private loginService: Service,
    private router: Router) { }

  ngOnInit() {
  }

  onSignout() {
    this.loginService.logout();
    this.router.navigate(['/home']);
  }
}
