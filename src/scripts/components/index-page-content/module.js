import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { Veil } from '../veil/component';
// import { Modal } from '../modal/component';
import { TestModule } from '../test/module';

import { IndexPageContent } from './component';

@NgModule({
  imports: [
    BrowserModule,
    TestModule,
  ],
  declarations: [
    // Veil,
    // Modal,
    IndexPageContent
  ],
  bootstrap: [
    IndexPageContent
  ]
})
export class IndexPageContentModule {}