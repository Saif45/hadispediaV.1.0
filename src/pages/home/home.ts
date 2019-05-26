import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TampilBeritaPage } from '../tampil-berita/tampil-berita';
import { DetailBeritaPage } from '../detail-berita/detail-berita';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  viewCtrl: any;

  splash = true;
  tabBarElement: any;

  constructor(public navCtrl: NavController) {
    this.tabBarElement = document.querySelector('.tabbar');
  }

  ionViewDidLoad() {
    this.tabBarElement.style.display = 'none';
    setTimeout(() => {
      this.splash = false;
      this.tabBarElement.style.display = 'flex';
    }, 4000);
  }

  TampilBerita() {
    this.navCtrl.push(TampilBeritaPage)
  }

  detailKategori() {
    this.navCtrl.push(DetailBeritaPage)
  }

  close() {
    this.viewCtrl.dismiss(false);
  }
}