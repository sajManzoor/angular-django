import {Hub} from '../shared/hub.model';


export class HubsService{

  private hubs: Hub[] =[
    new Hub('1',"1111"),
    new Hub('2',"2222")
  ];


  getHubs() {
    return this.hubs.slice();
  }



}
