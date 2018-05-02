import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {DeviceComponent} from './device/device.component';
import { HubsComponent } from './hubs/hubs.component';


@NgModule({
  declarations: [
    AppComponent,
    DeviceComponent,
    HubsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
