import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DeviceModel} from '../device.model';

@Component({
  selector: 'app-device-detail',
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.css']
})
export class DeviceDetailComponent implements OnInit {
  @Input() device: DeviceModel;
  constructor() { }

  ngOnInit() {
  }

}
