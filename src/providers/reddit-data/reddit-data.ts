import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
/*
  Generated class for the RedditDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RedditDataProvider {

  constructor(public http: Http) {
    console.log('Hello RedditDataProvider Provider');
  }

  getRemoteData() {
    this.http.get('https://www.reddit.com/r/gifs/top/.json?limit=10&sort=hot').map(res => res.json()).subscribe(data => { console.log(data) });
  }

  getLocalData(){
    this.http.get('assets/data/redditData.json').map(res => res.json()).subscribe(data => {console.log(data)});
  }

}
