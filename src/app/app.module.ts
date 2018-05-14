import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

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
import {HubsService} from './hubs/hubs.service';
import { NodesComponent } from './nodes/nodes.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {AppRoutingModule} from './app-routing.module';
import { DeviceSelectComponent } from './device/device-select/device-select.component';
import {DeviceService} from './device/device.service';
import {DataStorageService} from './shared/data-storage.service';
import { HttpClientModule} from '@angular/common/http';




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
    DropdownDirective,
    NodesComponent,
    PageNotFoundComponent,
    DeviceSelectComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [HubsService,DeviceService, DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
