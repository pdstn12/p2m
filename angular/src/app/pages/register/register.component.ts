import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import User from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      'name': '',
      'email': '',
      'password': '',
      'phone': '',
      'class': ''

    });
  }


  register() {
    console.log("o");
    console.log(this.registerForm.getRawValue());

    this.authService.register(this.registerForm.getRawValue()).subscribe(
      (response: User) => {
        console.log(response.access_token);
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
        // this.serverErrors = error.error;
        //console.log(this.serverErrors);
        this.router.navigate(['/login']);

      }
    );
    //   // this.auth.logIn(this.loginForm).subscribe(
    //   //   (response) => {
    //   //     //console.log(response);
    //   //     localStorage.removeItem('token');
    //   //     localStorage.setItem('token', response.access_token);
    //   //     this.router.navigate(['/dashboard']);
    //   //   },
    //   //   (error) => {
    //   //     localStorage.removeItem('token');
    //   //     this.serverErrors = error.error;
    //   //     //console.log(this.serverErrors);
    //   //     this.router.navigate(['/home']);

    //   //   }
    //   // );
  }


}
