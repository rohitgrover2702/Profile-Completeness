import { Component, OnInit } from '@angular/core';
import { UserDetail } from './user-detail';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  userDetail: UserDetail = {};
  progressCount$ = 0;
  classToAdd: string;

  ngOnInit(): void {
    this.userDetail.About = 'I am a software engineer!';
    this.userDetail.Image = 'http://localhost:4200/myimage';
    this.userDetail.PhoneNumber = '*********';
    this.userDetail.Profession = 'Software Engineer';
    this.userDetail.Skills = 'Angular7, Web API';
    this.getStatus();
  }

  getStatus() {
    // Added count for Image
    if (this.userDetail.Image !== null && this.userDetail.Image !== '') {
      this.progressCount$ += 1;
    }
    // Added count for About
    if (this.userDetail.About !== null && this.userDetail.About !== '') {
      this.progressCount$ += 1;
    }
    // Added count for PhoneNumber
    if (this.userDetail.PhoneNumber !== null && this.userDetail.PhoneNumber.length === 10) {
      this.progressCount$ += 1;
    }
    // Added count for Profession
    if (this.userDetail.Profession !== null && this.userDetail.Profession !== '') {
      this.progressCount$ += 1;
    }
    // Added count for Skills
    if (this.userDetail.Skills !== null && this.userDetail.Skills !== '') {
      this.progressCount$ += 1;
    }
    this.fillCircle();
  }

  fillCircle() {
    switch (this.progressCount$) {
      case 1:
        this.classToAdd = 'one';
        this.updateCircle(20);
        break;
      case 2:
        this.classToAdd = 'two';
        this.updateCircle(40);
        break;
      case 3:
        this.classToAdd = 'three';
        this.updateCircle(60);
        break;
      case 4:
        this.classToAdd = 'four';
        this.updateCircle(80);
        break;
      case 5:
        this.classToAdd = 'five';
        this.updateCircle(100);
        break;
      default:
        break;
    }
  }

  updateCircle(data: number) {
    const circle = document.querySelector('circle');
    const radius = circle.r.baseVal.value;
    const circumference = radius * 2 * Math.PI;
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = `${circumference}`;
    const offset = circumference - data / 100 * circumference;
    circle.style.strokeDashoffset = offset.toString();
  }
}
