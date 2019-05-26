import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TampilBeritaPage } from '../tampil-berita/tampil-berita';

/**
 * Generated class for the BacaBeritaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-baca-berita',
  templateUrl: 'baca-berita.html',
})
export class BacaBeritaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BacaBeritaPage');
  }

  TampilBerita() {
    this.navCtrl.push(TampilBeritaPage)
  }
}
