import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { RouterModule , Router } from '@angular/router';
import { FormBuilder , FormGroup , FormControl} from '@angular/forms';
import { SERVER_API_URL } from 'src/app/app.constants';
import User  from 'src/app/modules/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {


  loginForm: FormGroup;
  serverErrors = [];

  // private auth: CommonAuthService, 
  constructor(private fb : FormBuilder , private http : HttpClient , private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      'email' :'',
      'password'  :''
    });
  }


  // get email(){ return this.loginForm.get('email'); }
  // get password(){ return this.loginForm.get('password'); }



  login(){
    console.log("o");
    console.log(this.loginForm.getRawValue());

    this.http.post(SERVER_API_URL + 'api/login', this.loginForm.getRawValue()).subscribe(
      (response : User) => {
        console.log(response);
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
        this.serverErrors = error.error;
        //console.log(this.serverErrors);
        this.router.navigate(['/login']);

      }
      );
  }



  ngOnDestroy() {
  }

}



// import { CommonAuthService } from '../common-auth.service';
