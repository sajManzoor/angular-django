import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DeviceComponent} from './device/device.component';
import {HubsComponent} from './hubs/hubs.component';
import {DeviceSelectComponent} from './device/device-select/device-select.component';
import {DeviceDetailComponent} from './device/device-detail/device-detail.component';
import {DeviceEditComponent} from './device/device-edit/device-edit.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/devices', pathMatch: 'full'},
  {path: 'devices', component: DeviceComponent, children: [
      {path: '', component: DeviceSelectComponent},
      {path: 'new', component: DeviceEditComponent},
      {path: ':id', component: DeviceDetailComponent},
      {path: ':id/edit', component: DeviceEditComponent}
    ]},
  {path: 'hubs', component: HubsComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule{


}
