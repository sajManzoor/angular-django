import {Component, OnDestroy, OnInit, Output} from '@angular/core';
import {DeviceModel} from '../device.model';
import {DeviceService} from '../device.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit, OnDestroy {
    devices:DeviceModel[];
    private subscription: Subscription;

  constructor(private deviceService: DeviceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.devices = this.deviceService.getDevices();
    this.subscription = this.deviceService.devicesUpdated
      .subscribe(
        (devices: DeviceModel[]) =>{
          this.devices = devices;
        }
      );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }


  OnNewDevice(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }


}
