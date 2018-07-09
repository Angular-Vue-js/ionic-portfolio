import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RedditDataProvider } from '../../providers/reddit-data/reddit-data';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls: ['/pages/home/home.scss'],
})
export class HomePage {
  name: string;
  email: string;
  comment: string;


  constructor(public navCtrl: NavController, public redditService: RedditDataProvider,
    public storage: Storage) {
    // Prepare storage.
    storage.ready().then(() => {
      // Store some data if none exists.
      if (!this.storage.get('name')) {
        //console.log("Storing default data!");
        this.storage.set('name', 'This is the default name.');
        this.storage.set('email', 'This is the default email.');
        this.storage.set('comment', 'This is the default comment.');

      }
    });


  }

  ionViewDidLoad() {
    this.redditService.getLocalData();
    //this.redditService.getRemoteData();
  }
  
  // Executes every time page is viewed.
  ionViewWillEnter() {
    this.displayData();
  }

  // Uses a promise to get data.
  displayData() {
    this.storage.get('name').then((name) => {
      this.name = name;
    });
    this.storage.get('email').then((email) => {
      this.email = email;
    });
    this.storage.get('comment').then((comment) => {
      this.comment = comment;
    });
  }



}
