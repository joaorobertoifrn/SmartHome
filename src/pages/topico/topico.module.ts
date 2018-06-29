import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TopicoPage } from './topico';

@NgModule({
  declarations: [
    TopicoPage,
  ],
  imports: [
    IonicPageModule.forChild(TopicoPage),
  ],
})
export class TopicoPageModule {}
