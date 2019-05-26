import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailBeritaPage } from './detail-berita';
import { TampilBeritaPage } from '../tampil-berita/tampil-berita';

@NgModule({
  declarations: [
    DetailBeritaPage,
    TampilBeritaPage
  ],
  imports: [
    IonicPageModule.forChild(DetailBeritaPage),
  ],
})
export class DetailBeritaPageModule {}
