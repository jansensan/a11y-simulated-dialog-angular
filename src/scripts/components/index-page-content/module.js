import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TestModule } from '../test/module';
import { IndexPageContent } from './component';

@NgModule({
  imports: [
    BrowserModule,
    TestModule
  ],
  declarations: [IndexPageContent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export default class IndexPageContentModule {}