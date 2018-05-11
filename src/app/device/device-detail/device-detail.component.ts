import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DeviceModel} from '../device.model';
import {HubsService} from '../../hubs/hubs.service';
import {Hub} from '../../shared/hub.model';
import {DeviceService} from '../device.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-device-detail',
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.css'],

})
export class DeviceDetailComponent implements OnInit {
  device: DeviceModel;
  id: number
  activeHubs: Hub[];
  constructor(private hubsService: HubsService, private route: ActivatedRoute, private deviceService: DeviceService, private router: Router) { }

  ngOnInit() {
    // page update is not satisfied by the below line , follow observable
    //const id = this.route.snapshot.params['id'];

    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.device = this.deviceService.getDevice(this.id);
        }
      );
    this.activeHubs = this.hubsService.getHubs();
  }

  onDeviceEdit(){
    //this.router.navigate(['edit'],{relativeTo: this.route});
    console.log('the id of device is '+this.id);
    // this.deviceService.startedDeviceEditing.next(this.id);
    this.router.navigate(['../',this.id,'edit'], {relativeTo:this.route});
  }
}
