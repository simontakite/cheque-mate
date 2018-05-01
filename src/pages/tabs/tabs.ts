import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//import { Tab2Page } from './../pages/tab2/tab2';
//import { Tab1Page } from './../pages/tab1/tab1';

//import { SpecialPage } from '../pages/special/special';
import { AccountsPage } from './../accounts/accounts';
import { AlertsPage } from './../alerts/alerts';
import { AtmPage } from './../atm/atm';
import { DepositPage } from './../deposit/deposit';
import { TransfersPage } from './../transfers/transfers';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
 
  tab1Root: any = TransfersPage;
  tab2Root: any = DepositPage;
  tab3Root: any = AtmPage;

  myIndex: number;
 
  constructor(navParams: NavParams) {
    // Set the active tab based on the passed index from menu.ts
    this.myIndex = navParams.data.tabIndex || 0;
  }
}
