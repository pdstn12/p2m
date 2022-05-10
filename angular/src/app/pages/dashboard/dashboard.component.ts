import { Component, OnInit , Output } from '@angular/core';
import files from '../../models/files';
import File from '../../models/file';
import { CourseService } from "../../services/course.service";
import { SERVER_API_URL } from 'src/app/app.constants';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  public SERVER_API_URL = SERVER_API_URL;
  public count;
  public courses: File[];
  public courseLoading = true;

  public pageNumber = 1;
  public currentPage = 1;
  public nextPage = Math.min(this.currentPage + 1, this.pageNumber);
  public previewsPage = Math.max(this.currentPage - 1, 1);

  public is_admin = '0';

  constructor(private course: CourseService) { }
  ngOnInit() {
    this.is_admin = localStorage.getItem('is_admin');
    this.getCourses(1);

  }

  getCourses(page = 1) {
    this.courseLoading = true;
    console.log(this.previewsPage);

    this.course.getCourses(page - 1).subscribe((response: files) => {
      console.log(response);
      this.courses = response.files;
      console.log(this.courses);
      
      this.count = response.count;
      console.log(response.count);

      this.currentPage = page;
      this.pageNumber = Math.ceil(response.count / 5);
      this.nextPage = Math.min(this.currentPage + 1, this.pageNumber);
      this.previewsPage = Math.max(this.currentPage - 1, 1);
      this.courseLoading = false;

    },
      (error: any) => {
        console.log("error");
      }
    );

  }


  public delete(id) {

    this.course.deleteCourse(id).subscribe((response: files) => {


      this.getCourses(this.currentPage);


    },
      (error: any) => {
        console.log("error");
      }
    );
  }
  downloadMyFile(inputt) {
    const link = document.createElement('a');
    link.setAttribute('target', inputt);
    link.setAttribute('href', inputt);
    link.setAttribute('download', inputt);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

}
