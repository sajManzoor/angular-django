import {Component, OnInit} from '@angular/core';
import {LoggingService} from '../shared/logging.service';
import {DeviceService} from './device.service';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  providers: [LoggingService, DeviceService]
})
export class DeviceComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {

  }
}
