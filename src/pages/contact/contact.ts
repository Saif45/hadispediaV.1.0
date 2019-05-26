import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { BuatTanyaPage } from '../buat-tanya/buat-tanya';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  tanya: string = 'setting';
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController,) {

  }

  tanyaJawabs()
  {
    this.navCtrl.push(BuatTanyaPage);
  }
}
