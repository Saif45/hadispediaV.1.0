import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TentangAppPage } from './tentang-app';

@NgModule({
  declarations: [
    TentangAppPage,
  ],
  imports: [
    IonicPageModule.forChild(TentangAppPage),
  ],
})
export class TentangAppPageModule {}
