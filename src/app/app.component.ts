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
    { name: 'JavaScript', duration: 86 },
    { name: 'TypeScript', duration: 146 },
    { name: 'ReactJS', duration: 86 },
    { name: 'Next.js', duration: 90 },
  ];

  handleAddCourse(course) {
    this.courses = [course, ...this.courses];
  }
}
