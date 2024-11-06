import { Component, OnInit } from '@angular/core';
import { CourseServService } from '../service/course-serv.service';
import { Course } from '../model/courseModel';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.page.html',
  styleUrls: ['./add-course.page.scss'],
})
export class AddCoursePage implements OnInit {

  constructor(private courseServ: CourseServService) { }

  ngOnInit() {
  }

  
  onSubmit(newCourse: Course) {
    this.courseServ.addCourse(newCourse);
  }

}
