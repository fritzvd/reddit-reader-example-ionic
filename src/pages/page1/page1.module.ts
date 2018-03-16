import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Page1 } from './page1';

import {ComponentsModule } from '../../components/components.module'


@NgModule({
  declarations: [
    Page1,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(Page1),
  ],
})
export class Page1Module {}
