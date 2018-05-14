import {Component, EventEmitter,Output} from '@angular/core';
import {DeviceService} from '../device/device.service';
import {DataStorageService} from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl:'header.component.html'
})
export class HeaderComponent{
  @Output()featureSelected = new EventEmitter<string>();

  // not being used any more just for reference.
  onSelect(feature: string){
    this.featureSelected.emit(feature);
  }

  constructor(private dataStorageService: DataStorageService){}


  onFetchData(){
    this.dataStorageService.getDevices()
      .subscribe(
        data => {
          console.log('here i am');
          //console.log(data);
          // const devices: DeviceModel[] = dat.json();
          // this.deviceService.setDevices(devices);
        }
      );
  }

}
