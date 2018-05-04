import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {DeviceModel} from '../device.model';

@Component({
  selector: 'app-device-edit',
  templateUrl: './device-edit.component.html',
  styleUrls: ['./device-edit.component.css']
})
export class DeviceEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('typeInput') typeInput:ElementRef;
  @ViewChild('frameInput') frameInputRef: ElementRef;
  @ViewChild('platformInput') platformInput:ElementRef;
  @Output() deviceAdded = new EventEmitter<DeviceModel>();
  constructor() { }

  ngOnInit() {
  }

  onAddDevice(){
    console.log("im in onAddDevice")
    const name = this.nameInputRef.nativeElement.value;
    const platform = this.platformInput.nativeElement.value;
    const type = this.typeInput.nativeElement.value;
    const frame = this.frameInputRef.nativeElement.value;
    const new_device = new DeviceModel(name, type, platform, frame);
    this.deviceAdded.emit(new_device);

  }
}
