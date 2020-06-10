import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  page = 1;

  header = {
    1: ['Welcome To', 'MyTutz'],
    2: ['GET PAID TO', 'SHARE YOUR KNOWLEDGE']
  };

  description = {
    1: 'The largest tutorial booking service for tutors like you',
    2: 'Thousands of students in your university are ready to pay for academic help'
  };
  constructor() { }

  ngOnInit() {
  }

}
