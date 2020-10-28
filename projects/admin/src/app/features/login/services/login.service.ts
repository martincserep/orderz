import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loggedIn: boolean = false;
  login(user: User): void {
    this.loggedIn = true;
    this.router.navigate(['/'])
  }

  constructor(private router: Router) { }
}
