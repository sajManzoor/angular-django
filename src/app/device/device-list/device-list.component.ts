import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DeviceModel} from '../device.model';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit {
  @Output() deviceWasSelected = new EventEmitter<DeviceModel>();
  devices:DeviceModel[] = [
    new DeviceModel('Nexus 6P','smartphone','android','https://cdn-images-1.medium.com/max/2000/1*MYi1PJ-hdexAaNErd-pQnw.png'),
    new DeviceModel('Nexus 6','smartphone','android','https://cdn-images-1.medium.com/max/2000/1*MYi1PJ-hdexAaNErd-pQnw.png')
  ];


  constructor() { }

  ngOnInit() {
  }

  onDeviceSelected(device: DeviceModel){
    this.deviceWasSelected.emit(device);

  }

  newDeviceAdded(device :DeviceModel){
    console.log("new device name is "+device.name);
    this.devices.push(device);

  }

}
