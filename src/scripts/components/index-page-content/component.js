import { Component } from '@angular/core';

import template from './template.html';

// import { Veil } from '../veil/component';
// import { Modal } from '../modal/component';
import { TestComponent } from '../test/component';

@Component({
  selector: 'index-page-content',
  // directives: [Veil, Modal],
  directives: [TestComponent],
  template: template
})
export class IndexPageContent {}