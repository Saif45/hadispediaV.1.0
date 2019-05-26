import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular'; 
import { BuatBeritaPage } from '../buat-berita/buat-berita';
import { TampilBeritaPage } from '../tampil-berita/tampil-berita';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, public NavParams : NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

  openGallery(fab)
  {
    fab!=false;  
    fab.close();
    this.navCtrl.push(BuatBeritaPage)
  }

  TampilBerita()
  {
    this.navCtrl.push(TampilBeritaPage)
  }
}
