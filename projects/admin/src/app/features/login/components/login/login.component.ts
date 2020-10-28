import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup = new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, [Validators.required])
  });
  isLoading: boolean = false;
  
  sendLoginForm(): void {
    if (this.loginForm.valid) {
      this.isLoading = true;
      this.loginService.login(this.loginForm.getRawValue())
    }
  }

  constructor(private loginService: LoginService) { }

}
