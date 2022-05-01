import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import User from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {


  loginForm: FormGroup;
  serverErrors = [];

  // private auth: CommonAuthService, 
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      'email': '',
      'password': ''
    });
  }


  // get email(){ return this.loginForm.get('email'); }
  // get password(){ return this.loginForm.get('password'); }



  login() {
    console.log("o");
    console.log(this.loginForm.getRawValue());

    this.authService.login(this.loginForm.getRawValue()).subscribe(
      (response: User) => {
        console.log(response);
        localStorage.removeItem('token');
        localStorage.setItem('token', response.access_token);
        if (response.user.type == 0) {
          localStorage.removeItem('is_admin');
          localStorage.setItem('is_admin', '1');
        } else {
          localStorage.removeItem('is_admin');
          localStorage.setItem('is_admin', '0');
        }

        this.router.navigate(['/dashboard']);
      },
      (error) => {
        localStorage.removeItem('token');
        this.serverErrors = error.error;
        //console.log(this.serverErrors);
        this.router.navigate(['/login']);

      }
    );
  }



  ngOnDestroy() {
  }

}
