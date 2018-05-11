import {Hub} from '../shared/hub.model';

export class DeviceModel  {
  public name: string;
  public type: string;
  public platform:  string;
  public frame: string;
 // public hubs: Hub[];

  constructor(name: string, type: string, platform: string, frame: string){
    this.name = name;
    this.type = type;
    this.platform = platform;
    this.frame = frame;
    //this.hubs = hubs;
  }

}
