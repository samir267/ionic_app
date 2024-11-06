import { Injectable } from '@angular/core';
import { Course } from '../model/courseModel';

@Injectable({
  providedIn: 'root'
})
export class CourseServService {
  list: any[] = [];

  

  addCourse(course: Course) {
    this.list.push(course);
    console.log(this.list);
  }

  getCousesById(id: number) {
    return this.list.find(c => c.id === id);
  }

  getCourses() {
    return this.list;
  }



  constructor() { }
}
