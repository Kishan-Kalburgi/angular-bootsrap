import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  redirectUrl: string;

  isLoggedIn() {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      return true;
    } else {
      return false;
    }
  }

  login(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap()
    );
  }

  logout(): void {
    // console.log('serv');
    localStorage.setItem('isLoggedIn', 'false');
    this.router.navigate(['']);
  }
}
