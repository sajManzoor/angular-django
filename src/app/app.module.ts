import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {DeviceComponent} from './device/device.component';
import { HubsComponent } from './hubs/hubs.component';
import {HeaderComponent} from './Header/header.component';
import { StartComponent } from './start/start.component';
import { RunComponent } from './run/run.component';
import { DeviceListComponent } from './device/device-list/device-list.component';
import { DeviceDetailComponent } from './device/device-detail/device-detail.component';
import { DeviceItemComponent } from './device/device-list/device-item/device-item.component';
import { DeviceEditComponent } from './device/device-edit/device-edit.component';
import {BasicHighlightDirective} from './shared/basic-highlight.directive';
import {DropdownDirective} from './shared/dropdown.directive';


@NgModule({
  declarations: [
    AppComponent,
    DeviceComponent,
    HubsComponent,
    HeaderComponent,
    StartComponent,
    RunComponent,
    DeviceListComponent,
    DeviceDetailComponent,
    DeviceItemComponent,
    DeviceEditComponent,
    BasicHighlightDirective,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
