import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  styleUrls: ['/pages/contact/contact.scss']
})
export class ContactPage {
  email: string;
  username: string;
  comment: string;
  input1:string;
  input2: string;
  input3: string;
  hiddenInfo: string;

  constructor(public navCtrl: NavController, public storage: Storage) {

  }

  // User clicked button.
  setPerson() {
    this.storage.set('name', this.username)
    this.storage.set('email', this.email)
    this.storage.set('comment', this.comment)
    this.hiddenInfo = "Please check your information:";
    this.input1 = "Your name: " + this.username;
    this.input2 = "Your Email: " + this.email;
    this.input3 = "Your Comment: " + this.comment;
}


}
