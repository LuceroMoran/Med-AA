import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PatientInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-patient-info',
  templateUrl: 'patient-info.html',
})
export class PatientInfoPage {
  patient: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.patient = navParams.get('patient');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PatientInfoPage');
  }

}
