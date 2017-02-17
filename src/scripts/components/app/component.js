import { Component } from '@angular/core';

import template from './template.html';

import { IndexPageContent } from '../index-page-content/component';

@Component({
  selector: 'app',
  directives: [IndexPageContent],
  template: template
})
export class AppComponent {}