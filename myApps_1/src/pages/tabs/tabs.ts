import { Component } from '@angular/core';

import { ProfilesPage } from '../profiles/profiles';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ProfilesPage;


  constructor() {

  }
}
