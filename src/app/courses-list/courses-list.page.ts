import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../model/courseModel';
import { CourseServService } from '../service/course-serv.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.page.html',
  styleUrls: ['./courses-list.page.scss'],
})
export class CoursesListPage implements OnInit {

  constructor(private router: Router,private courseServ: CourseServService) { }

  ngOnInit() {
  }

  getAllCourses(){
    this.courseServ.getCourses();
  }
  newCourse(){
    this.router.navigate(['/add-course']);
  }

}
