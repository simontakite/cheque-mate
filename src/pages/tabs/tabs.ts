import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
////
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
