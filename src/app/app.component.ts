import {Component, HostListener} from '@angular/core';

import {ModalController, NavController, Platform} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import preventExtensions = Reflect.preventExtensions;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private navCtrl: NavController,
    private modalCtrl: ModalController,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      window.onpopstate = () => {
        this.modalCtrl.getTop().then(value => {
          if (value !== undefined) {
            this.modalCtrl.dismiss();
          }
        });
      }
    });
  }
}
