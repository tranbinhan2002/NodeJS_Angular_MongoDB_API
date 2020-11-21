import { Injectable, InjectorType } from '@angular/core';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Student } from '../models/student';
import { StudentComponent } from '../components/student/student.component';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  selectedStudent: Student;
  student: Student[];
  readonly URL_API = 'http://localhost:3000/api/student';

  constructor(private http: HttpClient) {
    this.selectedStudent = new Student();
  }

  getStudent(): any {
    return this.http.get(this.URL_API);
  }

  postStudent(student: Student): any {
    return this.http.post(this.URL_API, student);
  }

  patchStudent(student: Student): any {
    return this.http.patch(this.URL_API + `/${student._id}`, student);
  }

  deleteStudent(_id: string): any {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
