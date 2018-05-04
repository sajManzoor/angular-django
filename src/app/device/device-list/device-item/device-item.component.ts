import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DeviceModel} from '../../device.model';

@Component({
  selector: 'app-device-item',
  templateUrl: './device-item.component.html',
  styleUrls: ['./device-item.component.css']
})
export class DeviceItemComponent implements OnInit {
  @Input() device: DeviceModel;
  @Output() deviceSelected = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  onDeviceClicked(){
    this.deviceSelected.emit();
  }

}
