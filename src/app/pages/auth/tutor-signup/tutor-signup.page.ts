import { Component, OnInit } from '@angular/core';
import {HelperFunctionsService} from '../../../services/helper-functions.service';

@Component({
  selector: 'app-tutor-signup',
  templateUrl: './tutor-signup.page.html',
  styleUrls: ['./tutor-signup.page.scss'],
})
export class TutorSignupPage implements OnInit {

  constructor(private helper: HelperFunctionsService) { }

  ngOnInit() {
  }

  completeSignUp() {
      this.helper.displayAlert('Loading', 10);
  }
}
