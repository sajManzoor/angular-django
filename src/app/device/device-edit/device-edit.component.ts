import {Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {DeviceModel} from '../device.model';
import {DeviceService} from '../device.service';
import {ActivatedRoute, Params} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-device-edit',
  templateUrl: './device-edit.component.html',
  styleUrls: ['./device-edit.component.css']
})
export class DeviceEditComponent implements OnInit {
  id: number;
  editMode = false;
  // @ViewChild('nameInput') nameInputRef: ElementRef;
  // @ViewChild('typeInput') typeInput:ElementRef;
  // @ViewChild('frameInput') frameInputRef: ElementRef;
  @ViewChild('f') deviceForm: NgForm;
  @Output() deviceAdded = new EventEmitter<DeviceModel>();
  editedItemIndex: number;
  editedDevice: DeviceModel;

  constructor(private deviceService: DeviceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) =>{
            this.id = +params['id'];
            this.editMode = params['id'] != null;
            if ( this.editMode) {
              this.editedItemIndex = params['id'];
              this.editedDevice = this.deviceService.getDevice(params['id']);
              console.log(this.editedDevice.frame);
              this.deviceForm.setValue({
                name: this.editedDevice.name,
                platform: this.editedDevice.platform,
                type: this.editedDevice.type,
                udid: this.editedDevice.frame
              });
            }
        }
      );
  }

  onAddDevice(form: NgForm){

    // const name = this.nameInputRef.nativeElement.value;
    // const platform = this.platformInput.nativeElement.value;
    // const type = this.typeInput.nativeElement.value;
    // const frame = this.frameInputRef.nativeElement.value;
    const value = form.value;
    const new_device = new DeviceModel(value.name, value.type, value.platform, value.udid);
    // this.deviceAdded.emit(new_device);
    this.deviceService.addDevice(new_device);
  }

}
