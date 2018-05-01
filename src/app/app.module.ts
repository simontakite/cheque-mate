import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { AccountsPage } from '../pages/accounts/accounts';
import { AlertsPage } from '../pages/alerts/alerts';
import { AtmPage } from '../pages/atm/atm';
import { DepositPage } from '../pages/deposit/deposit';
import { TransfersPage } from '../pages/transfers/transfers';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    HomePage,
    AccountsPage,
    AlertsPage,
    AtmPage,
    DepositPage,
    TransfersPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    HomePage,
    AccountsPage,
    AlertsPage,
    AtmPage,
    DepositPage,
    TransfersPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
