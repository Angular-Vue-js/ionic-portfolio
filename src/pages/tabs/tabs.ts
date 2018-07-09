import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { PortfolioPage } from '../portfolio/portfolio';
import { WorkPage } from '../work/work';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = PortfolioPage;
  tab4Root = WorkPage;
  tab5Root = ContactPage;

  constructor() {

  }
}
