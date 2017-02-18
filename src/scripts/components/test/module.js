import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestComponent } from '../test/component';


@NgModule({
  imports: [CommonModule],
  declarations: [TestComponent],
  exports: [TestComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TestModule {}
