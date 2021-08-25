import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListCoursesComponent } from './list-courses/list-courses.component';
import { RegisterCourseComponent } from './register-course/register-course.component';

@NgModule({
  declarations: [AppComponent, ListCoursesComponent, RegisterCourseComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
