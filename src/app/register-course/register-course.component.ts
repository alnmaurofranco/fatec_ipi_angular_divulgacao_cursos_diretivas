import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-register-course',
  templateUrl: './register-course.component.html',
  styleUrls: ['./register-course.component.css'],
})
export class RegisterCourseComponent {
  @Output() addCourse = new EventEmitter();

  add(name, duration) {
    this.addCourse.emit({ name, duration });
  }
}
