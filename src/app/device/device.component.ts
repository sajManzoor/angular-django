import {Component, OnInit} from '@angular/core';
import {DeviceModel} from './device.model';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
})
export class DeviceComponent implements OnInit {
  selectedDevice: DeviceModel;

  constructor() { }

  ngOnInit() {
  }


}
