import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MonitorPage } from './monitor';
// Grafico
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    MonitorPage,
  ],
  imports: [
    IonicPageModule.forChild(MonitorPage),
    ChartsModule
  ],
})
export class MonitorPageModule {}
