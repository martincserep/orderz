import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../shared/services/api.service';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loggedIn: boolean = false;
  login(user: User): void {
    this.apiService.get('login').subscribe((res) => {
      console.log(res);
    });
    this.loggedIn = true;
    this.router.navigate(['/'])
  }

  constructor(private router: Router, private apiService: ApiService) { }
}
