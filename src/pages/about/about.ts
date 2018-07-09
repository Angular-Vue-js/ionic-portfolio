import { NavController } from 'ionic-angular';
import { Platform, ActionSheetController } from 'ionic-angular';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { PopoverController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  constructor(public popoverCtrl: PopoverController) { }

  presentPopover() {
    const popover = this.popoverCtrl.create(AboutPage);
    popover.present();
  }
}