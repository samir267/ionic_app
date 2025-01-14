import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddCoursePageRoutingModule } from './add-course-routing.module';

import { AddCoursePage } from './add-course.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddCoursePageRoutingModule,
    FormsModule
  ],
  declarations: [AddCoursePage]
})
export class AddCoursePageModule {}
