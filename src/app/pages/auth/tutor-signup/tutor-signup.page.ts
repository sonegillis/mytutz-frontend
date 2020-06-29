import { Component, OnInit } from '@angular/core';
import {HelperFunctionsService} from '../../../services/helper-functions.service';
import {DropdownData} from '../../../services/interface';
import {NavController} from '@ionic/angular';
import {Router, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-tutor-signup',
  templateUrl: './tutor-signup.page.html',
  styleUrls: ['./tutor-signup.page.scss'],
})
export class TutorSignupPage implements OnInit {
  universities: Array<DropdownData>;
  faculties: Array<DropdownData>;
  departments: Array<DropdownData>;
  courseCodes: Array<DropdownData>;

  constructor(private helper: HelperFunctionsService,
              private navCtrl: NavController,
              private route: Router) {
      this.universities = this.getUniversities();
      this.faculties = this.getFaculties();
      this.departments = this.getDepartments();
      this.courseCodes = this.getCourseCodes();
  }

  ngOnInit() {
  }

  completeSignUp() {
      this.helper.displayAlert('Loading', 10);
      // this.navCtrl.navigateForward('complete');
      this.route.navigateByUrl('auth/complete');
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

  getFaculties(): DropdownData[] {
      return [
          {
              id: 1,
              name: 'Engineering and Technology',
              selected: false
          },
          {
              id: 2,
              name: 'Law and Political Science',
              selected: false
          },
          {
              id: 3,
              name: 'Management',
              selected: false
          },
          {
              id: 4,
              name: 'ASTI',
              selected: false
          },
          {
              id: 5,
              name: 'Arts',
              selected: false
          },
          {
              id: 6,
              name: 'College of Technology',
              selected: false
          },
      ];
  }

  getDepartments(): DropdownData[] {
      return [
          {
              id: 1,
              name: 'Electrical and Electronic Engineering',
              selected: false
          },
          {
              id: 2,
              name: 'Computer Engineering',
              selected: false
          }
      ];
  }

  getCourseCodes(): DropdownData[] {
      return [
          {
              id: 1,
              name: 'EEF 202',
              selected: false
          },
          {
              id: 2,
              name: 'ENG 101',
              selected: false
          },
          {
              id: 3,
              name: 'CEF 510',
              selected: false
          }
      ];
  }
}
