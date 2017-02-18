import { Component } from '@angular/core';

import template from './template.html';

import { TestComponent } from '../test/component';

@Component({
  selector: 'index-page-content',
  directives: [TestComponent],
  template: template
})
export class IndexPageContent {}