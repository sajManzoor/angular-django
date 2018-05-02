import {Component} from '@angular/core';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html'
})
export class DeviceComponent {
  addNewDevice = false;
  deviceName = 'Nexus 6P';
  newDeviceName = 'Dummy Device'
  deviceCreated = false;
  osVersion = '6.0.1'
  deviceAdditionStatus = "Device was not added";
  constructor(){
    setTimeout(() => {this.addNewDevice = true;},2000);
  }

  getDeviceProperties(){
    return this.osVersion;
  }

  onAddDevice(){
    this.deviceCreated = true;
    this.deviceAdditionStatus = "Device successfully added."+this.newDeviceName;
  }

  onSucessAdd(event: Event){
    this.newDeviceName = (<HTMLInputElement>event.target).value;
  }
}
