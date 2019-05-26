import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BacaBeritaPage } from './baca-berita';

@NgModule({
  declarations: [
    BacaBeritaPage,
  ],
  imports: [
    IonicPageModule.forChild(BacaBeritaPage),
  ],
})
export class BacaBeritaPageModule {}
