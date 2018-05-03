import { Component, OnInit } from '@angular/core';
import {Hub} from '../shared/hub.model';

@Component({
  selector: 'app-hubs',
  templateUrl: './hubs.component.html',
  styleUrls: ['./hubs.component.css']
})
export class HubsComponent implements OnInit {
  hubs: Hub[] =[
    new Hub('1',"1111"),
    new Hub('2',"2222")
  ];
  constructor() { }

  ngOnInit() {
  }

}
