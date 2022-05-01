import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { SERVER_API_URL } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn = false;
  constructor(private http: HttpClient) { }

  isAuthonticated() {
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          let t = localStorage.getItem('token');
          if (t) {
            this.loggedIn = true;
            resolve(this.loggedIn);
          } else {
            this.loggedIn = false;
            reject();
          }
        }, 800);
      });

    return promise;
  }

  login(data: any): Observable<any> {
    return this.http.post(`${SERVER_API_URL}api/login`, data);
  }

  register(data: any): Observable<any> {
    return this.http.post(`${SERVER_API_URL}api/register`, data);
  }

}
