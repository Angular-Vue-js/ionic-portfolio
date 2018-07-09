import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-portfolio',
  templateUrl: 'portfolio.html'
})
export class PortfolioPage {

  posts: any;
  
  constructor(public navCtrl: NavController, public http: Http) {

    this.http.get('https://www.reddit.com/r/all/top.json?limit=10&sort=new').map(res => res.json()).subscribe(data => {
      this.posts = data.data.children;
//      console.log(data.data);
    },
      err => {
        console.log("oops!");
      }
    );

  }
}
