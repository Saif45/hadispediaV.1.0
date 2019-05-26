import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TampilBeritaPage } from '../tampil-berita/tampil-berita';

/**
 * Generated class for the DetailBeritaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-berita',
  templateUrl: 'detail-berita.html',
})
export class DetailBeritaPage {
  modalCtrl: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailBeritaPage');
  }

  TampilBerita()
  {
    const modal = this.modalCtrl.create(TampilBeritaPage);
    modal.present();
  }

}
