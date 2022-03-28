import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { RouterModule , Router } from '@angular/router';
import { FormBuilder , FormGroup , FormControl} from '@angular/forms';
import { SERVER_API_URL } from 'src/app/app.constants';
import User  from 'src/app/modules/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private fb : FormBuilder , private http : HttpClient,private router: Router ) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      'name' :'',
      'email' :'',
      'password'  :'',
      'phone' :'',
      'class' :''

    });
  }


  register(){
    console.log("o");
    console.log(this.registerForm.getRawValue());

    this.http.post(SERVER_API_URL + 'api/register', this.registerForm.getRawValue()).subscribe(
      (response : User) => {
        console.log(response.access_token);
        localStorage.removeItem('token');
        localStorage.setItem('token', response.access_token);
        if(response.user.type == 0){
          localStorage.removeItem('is_admin');
          localStorage.setItem('is_admin', '1');
        }else {
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
