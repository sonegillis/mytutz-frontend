import { Injectable } from '@angular/core';
import {AlertController, LoadingController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class HelperFunctionsService {

  constructor(private loadingCtrl: LoadingController) { }

  async displayAlert(message: string, duration?: number) {
    const alert = await this.loadingCtrl.create(
        {
          message,
          duration: duration ? duration : Number.POSITIVE_INFINITY
        }
    );
    await alert.present();
  }

  dismissAlert() {
    this.loadingCtrl.dismiss();
  }
}
