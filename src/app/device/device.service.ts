import {DeviceModel} from './device.model';
import {Subject} from 'rxjs/Subject';


export class DeviceService {
   devicesUpdated = new Subject<DeviceModel[]>();
   private devices:DeviceModel[] = [
    new DeviceModel('Nexus 6P','smartphone','android','https://cdn-images-1.medium.com/max/2000/1*MYi1PJ-hdexAaNErd-pQnw.png'),
    new DeviceModel('Nexus 6','smartphone','android','https://cdn-images-1.medium.com/max/2000/1*MYi1PJ-hdexAaNErd-pQnw.png')
  ];



  getDevices(){
    // to get the copy of the array rather than the reference of the device list so that the actual array is not accessible at all.
    return this.devices.slice();
  }

  addDevice(device: DeviceModel){
      this.devices.push(device);
      this.devicesUpdated.next(this.devices.slice());
  }
  constructor(){}

  getDevice(index: number) {
    return this.devices.slice()[index];
  }

  updateDevice(index: number,newDevice: DeviceModel){
    this.devices[index] = newDevice;
    this.devicesUpdated.next(this.devices.slice());
  }

  deleteDevice(index: number){
    this.devices.splice(index, 1);
    this.devicesUpdated.next(this.devices.slice());
  }

  setDevices(devices: DeviceModel[]){
    this.devices = devices;
    this.devicesUpdated.next(this.devices.slice());
  }


}
