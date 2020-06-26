import { Component, OnInit } from '@angular/core';
import {HelperFunctionsService} from '../../../services/helper-functions.service';
import {DropdownData} from '../../../services/interface';

@Component({
  selector: 'app-tutor-signup',
  templateUrl: './tutor-signup.page.html',
  styleUrls: ['./tutor-signup.page.scss'],
})
export class TutorSignupPage implements OnInit {
  universities: Array<DropdownData>;

  constructor(private helper: HelperFunctionsService) {
      this.universities = this.getUniversities();
  }

  ngOnInit() {
  }

  completeSignUp() {
      this.helper.displayAlert('Loading', 10);
  }

  getUniversities(): DropdownData[] {
      return [
          {
              id: 1,
              name: 'University of Buea',
              selected: false
          },
          {
              id: 2,
              name: 'University of Bamenda',
              selected: false
          },
          {
              id: 3,
              name: 'University of Douala',
              selected: false
          },
          {
              id: 4,
              name: 'University of Dschang',
              selected: false
          },
          {
              id: 5,
              name: 'University of Yaounde 1',
              selected: false
          },
          {
              id: 6,
              name: 'University of Yaounde 2',
              selected: false
          },
      ];
  }
}
