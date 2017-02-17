import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TestComponent } from './component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    TestComponent
  ],
  bootstrap: [
    TestComponent
  ],
})
export class TestModule {}