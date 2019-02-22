import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service {

  isLoggedInFlag = false;

  constructor() { }

  login() {
    this.isLoggedInFlag = true;
  }

  logout() {
    this.isLoggedInFlag = false;
  }

  isLoggedIn() {
    return this.isLoggedInFlag;
  }
}
