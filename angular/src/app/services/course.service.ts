import { Injectable } from '@angular/core';
import { SERVER_API_URL } from 'src/app/app.constants';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CourseService {

  auth_token = localStorage.getItem('token');


  headers = new HttpHeaders({
    // 'Content-Type': "multipart/form-data; boundary=--------------------------" + Math.random().toString().substr(2),
    'Accept': 'application/json',
    'Authorization': `Bearer ${this.auth_token}`
  })




  constructor(private http: HttpClient) { }

  getCourses(page): Observable<any> {
    return this.http.get(SERVER_API_URL + 'api/file/' + page, { headers: this.headers });

  }

  addCourse(data): Observable<any> {
    // console.log(data);
    // console.log('here');
    return this.http.post(SERVER_API_URL + 'api/file/add', data, { headers: this.headers });
  }
  deleteCourse(id): Observable<any> {
    // console.log(data);
    // console.log('here');
    return this.http.get(SERVER_API_URL + 'api/file/delete/' + id, { headers: this.headers });
  }
}
