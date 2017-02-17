import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Modal } from './component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    Modal
  ],
  bootstrap: [
    Modal
  ]
})
export class ModalModule {}