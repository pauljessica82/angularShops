import { Component } from '@angular/core'; 
import { CoursesService } from './courses.service';

@Component({
selector: 'courses',
  template: `<h2>{{ title }}</h2>
             <ul>
                <li *ngFor="let course of courses">
                {{ course }}
                </li>
             </ul>
            <h2>{{ authors_title }}</h2>
            <ul>
                <li *ngFor="let author of authors">
                {{ author }}
                </li>
             </ul>

            `

})
export class CoursesComponent {
  title = "List of Courses";
  authors_title = " List of Authors"; 
  courses;
  authors;

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
    this.authors = service.getAuthors();
  }
}
