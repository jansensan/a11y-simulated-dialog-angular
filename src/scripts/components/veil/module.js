import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Veil } from './component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    Veil
  ],
  bootstrap: [
    Veil
  ]
})
export class VeilModule {}