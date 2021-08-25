import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'divulgacao-cursos';

  hiddenButton = false;

  courses = [
    { name: 'ReactJS', duration: 46 },
    { name: 'Express.js', duration: 86 },
  ];

  handleAddCourse(course) {
    this.courses = [course, ...this.courses];
  }
}
