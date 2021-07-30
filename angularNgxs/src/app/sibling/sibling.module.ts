import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiblingRoutingModule } from './sibling-routing.module';
import { SiblingComponent } from './sibling.component';


@NgModule({
  declarations: [
    SiblingComponent
  ],
  imports: [
    CommonModule,
    SiblingRoutingModule
  ]
})
export class SiblingModule { }
