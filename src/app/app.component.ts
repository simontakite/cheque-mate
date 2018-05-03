import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//////
import { TabsPage } from './../pages/tabs/tabs';
import { AccountsPage } from './../pages/accounts/accounts';
import { AlertsPage } from './../pages/alerts/alerts';
import { AtmPage } from './../pages/atm/atm';
import { DepositPage } from './../pages/deposit/deposit';
import { TransfersPage } from './../pages/transfers/transfers';

export interface PageInterface {
  title: string;
  name: string;
  component: any;
  icon: string;
  index?: number;
  tabName?: string;
  tabComponent?: any;
}

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  rootPage:any = TabsPage;
  pages: PageInterface[] = [
    { title: 'Transfers', name: 'TabsPage', component: TabsPage, tabComponent: TransfersPage, index: 0, icon: 'home' },
    { title: 'Deposit Cheque', name: 'TabsPage', component: TabsPage, tabComponent: DepositPage, index: 1, icon: 'contacts' },
    { title: 'Branches/ATM', name: 'TabsPage', component: TabsPage, tabComponent: AtmPage, index: 2, icon: 'map' },
    { title: 'My Accounts', name: 'AccountsPage', component: AccountsPage, icon: 'shuffle' },
    { title: 'Alerts', name: 'AlertsPage', component: AlertsPage, icon: 'shuffle' },
  ];
  
  @ViewChild(Nav) nav: Nav;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(page: PageInterface) {
    let params = {};
 
    // The index is equal to the order of our tabs inside tabs.ts
    if (page.index) {
      params = { tabIndex: page.index };
    }
 
    // If tabs page is already active just change the tab index
    if (this.nav.getActiveChildNavs().length && page.index != undefined) {
      this.nav.getActiveChildNavs()[0].select(page.index);
    } else {
      // Tabs are not active, so reset the root page 
      // In this case: moving to or from SpecialPage
      this.nav.setRoot(page.component, params);
    }
  }
 
  isActive(page: PageInterface) {
    // Again the Tabs Navigation
    let childNav = this.nav.getActiveChildNavs()[0];
 
    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }
 
    // Fallback needed when there is no active childnav (tabs not active)
    if (this.nav.getActive() && this.nav.getActive().name === page.name) {
      return 'primary';
    }
    return;
  }
}