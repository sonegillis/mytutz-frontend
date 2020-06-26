import { Component, OnInit } from '@angular/core';
import {HelperFunctionsService} from '../../../services/helper-functions.service';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(private helper: HelperFunctionsService,
              private navCtrl: NavController) { }

  ngOnInit() {
  }

  initialSignUp() {
    console.log('signup');
    this.helper.displayAlert('Loading');
    this.navCtrl.navigateForward('auth/tutor-signup');
  }
}
