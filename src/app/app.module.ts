import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { PortfolioPage } from '../pages/portfolio/portfolio';
import { AboutPage } from '../pages/about/about';
import { WorkPage } from '../pages/work/work';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { NavigationDetailsPage } from '../pages/details/details';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { Storage } from '@ionic/storage';
import { HttpModule } from '@angular/http';
import { RedditDataProvider } from '../providers/reddit-data/reddit-data';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    WorkPage,
    HomePage,
    PortfolioPage,
    NavigationDetailsPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    //RedditDataProvider,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: '__mydb',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
 })

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    NavigationDetailsPage,
    PortfolioPage,
    HomePage,
    WorkPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    HttpModule,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RedditDataProvider
  ]
})
export class AppModule {}
