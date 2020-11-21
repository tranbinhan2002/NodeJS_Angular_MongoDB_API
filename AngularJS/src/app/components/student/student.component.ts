import { Component, OnInit } from '@angular/core';
import { StudentService} from '../../services/student.service';
import { from } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Student } from 'src/app/models/student';
declare var M: any;

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  providers: [StudentService]
})
export class StudentComponent implements OnInit {

  constructor(public studentService: StudentService) {}

  ngOnInit(): void {
    this.getStudent();
  }

  addStudent(form: NgForm): void
  {
    if (form.value._id)
    {
      this.studentService.patchStudent(form.value).subscribe(res => {
        this.resetForm(form);
        this.getStudent();
      });
    }
    else {
      this.studentService.postStudent(form.value).subscribe(res => {
        this.resetForm(form);
        this.getStudent();
      });
    }
  }

  getStudent(): void
  {
    this.studentService.getStudent().subscribe(res => {
      this.studentService.student = res as Student[];
    });
  }
  editStudent(student: Student): void
  {
    this.studentService.selectedStudent = student;
  }

  deleteStudent(_id: string): void
  {
    if (confirm('Are you sure you want to delete it?'))
    {
      this.studentService.deleteStudent(_id).subscribe(res => {
        this.getStudent();
      });
    }
  }

  resetForm(form?: NgForm): void
  {
    if (form)
    {
      form.reset();
      this.studentService.selectedStudent = new Student();
    }
  }

}
