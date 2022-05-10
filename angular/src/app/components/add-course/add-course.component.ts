import { Component, EventEmitter, OnInit , Output} from '@angular/core';
import { FormBuilder , FormGroup , FormControl} from '@angular/forms';
import { CourseService } from '../../services/course.service';
import  response  from '../../models/response';


@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  
  @Output() added = new EventEmitter<boolean>();
  public show = false;
  public courseForm: FormGroup;
  serverErrors = [];
  private fileName;
  public success = false; 
  public error = false; 
  public loading = false;
  

  constructor(private fb : FormBuilder , public course : CourseService ) { }

  ngOnInit(): void {
    this.courseForm = this.fb.group({
      'title' : '',
      'class' : '',
      'course': '',
      'matier': '',
    }); 

    
  }

  public onFileChange(event) {

    const file = (event.target as HTMLInputElement).files[0];
    this.courseForm.patchValue({
      course: file
    });
    this.courseForm.get('course').updateValueAndValidity()
  }

  add(){
    // console.log("ok");
    // console.log(this.courseForm.getRawValue());
    // console.log({'courseForm': this.courseForm});
    this.loading = true;
    const formData = new FormData();
    // this.formData.append('course' , this.fileName );
    formData.append("title", this.courseForm.get('title').value);
    formData.append("class", this.courseForm.get('class').value);
    formData.append("course", this.courseForm.get('course').value);
    formData.append("matier", this.courseForm.get('matier').value);
    // console.log(formData);
    // console.log({'coursrform . value': this.courseForm.getRawValue()});
    
    this.course.addCourse(formData).subscribe((response : response) => {
      this.loading = false;
      console.log(response.message);
      if ( response.message == "success" ){
        this.success = true; 
        this.error = false; 
        this.added.emit(true);
      }else{
        this.success = false; 
        this.error = true; 
      }

    } , 
    (error : any) => {
      this.success = false; 
      this.loading = false;
      this.error = true; 
    }) ; 
  }

}
