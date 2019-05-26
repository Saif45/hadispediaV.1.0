import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { QuillModule } from 'ngx-quill';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { TampilBeritaPage } from '../pages/tampil-berita/tampil-berita';
import { BuatBeritaPage } from '../pages/buat-berita/buat-berita';
import { BuatTanyaPage } from '../pages/buat-tanya/buat-tanya';
import { BacaBeritaPage } from '../pages/baca-berita/baca-berita';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BacaAlquranPage } from '../pages/baca-alquran/baca-alquran';
import { BacaHadisPage } from '../pages/baca-hadis/baca-hadis';
import { SetelanAkunPage } from '../pages/setelan-akun/setelan-akun';
import { TentangAppPage } from '../pages/tentang-app/tentang-app';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    TampilBeritaPage,
    BuatBeritaPage,
    BuatTanyaPage,
    BacaBeritaPage,
    BacaAlquranPage,
    BacaHadisPage,
    SetelanAkunPage,
    TentangAppPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FormsModule,
    QuillModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    TampilBeritaPage,
    BuatBeritaPage,
    BuatTanyaPage,
    BacaBeritaPage,
    BacaAlquranPage,
    BacaHadisPage,
    SetelanAkunPage,
    TentangAppPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
  ],
  schemas: [ 
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
   ]
})
export class AppModule {}
