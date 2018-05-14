import {Injectable} from '@angular/core';
import {DeviceService} from '../device/device.service';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DataStorageService {
  constructor(private httpClient: HttpClient, private deviceService: DeviceService){

  }



  getDevices() {
    return this.httpClient.get('http://127.0.0.1:8000/api/devices/?format=json');
  }
}
