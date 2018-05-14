import {Component, OnInit} from '@angular/core';
import {LoggingService} from '../shared/logging.service';


@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  providers: [LoggingService]
})
export class DeviceComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {

  }
}
