import { Component, OnInit } from '@angular/core';
import {Hub} from '../shared/hub.model';
import {HubsService} from './hubs.service';

@Component({
  selector: 'app-hubs',
  templateUrl: './hubs.component.html',
  styleUrls: ['./hubs.component.css'],
  providers: [HubsService]
})
export class HubsComponent implements OnInit {
  hubs: Hub[];
  constructor(private hubService: HubsService) { }

  ngOnInit() {
    this.hubs = this.hubService.getHubs();
  }

}
