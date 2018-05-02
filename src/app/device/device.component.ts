import {Component} from '@angular/core';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html'
  styles:[`
      .online {
        color: white;
      }
  `]
})
export class DeviceComponent {
  addNewDevice = false;
  deviceName = 'Nexus 6P';
  newDeviceName = 'Dummy Device'
  deviceCreated = false;
  osVersion = '6.0.1'
  deviceAdditionStatus = "Device was not added";
  devices = ['A','B'];
  constructor(){
    setTimeout(() => {this.addNewDevice = true;},2000);
    this.deviceAdditionStatus = Math.random() > 0.5 ? 'online' : 'offline'
  }

  getDeviceProperties(){
    return this.osVersion;
  }

  onAddDevice(){
    this.deviceCreated = true;
    this.devices.push(this.newDeviceName)
    this.deviceAdditionStatus = "Device successfully added."+this.newDeviceName;
  }

  onSucessAdd(event: Event){
    this.newDeviceName = (<HTMLInputElement>event.target).value;
  }

  getStatusColor(){
    return this.deviceAdditionStatus === 'online' ? 'green' : 'red';
  }
}
