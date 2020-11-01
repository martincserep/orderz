import { Component, OnInit } from '@angular/core';

import { faHome, faClipboardList, faSignal, faCog, faUtensils, faMoneyBill } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin-frame',
  templateUrl: './admin-frame.component.html',
  styleUrls: ['./admin-frame.component.scss']
})
export class AdminFrameComponent implements OnInit {

  home = faHome;
  orders = faClipboardList;
  foods = faUtensils;
  finance = faMoneyBill;
  reports = faSignal;
  settings = faCog;
  constructor() { }
  ngOnInit(): void {
  }

}
