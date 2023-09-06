import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  constructor(private api:ApiService){

  }
  

  AddStudemt(name:any,mobile:any,email:any,dob:any,academicYear:any){
   
  var student_obj={
 "student_name" : name.value,
 "student_mobile" : mobile.value, 
 "student_email" : email.value,
 "student_dob" : dob.value,
 "student_year" : academicYear.value,
  }

   this.api.addtudent(student_obj).subscribe(
    (value) => {
     console.log(value)
    }
   )
  }
   
}
