import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './component';
import { IndexPageContent } from '../index-page-content/component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    IndexPageContent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class App {}