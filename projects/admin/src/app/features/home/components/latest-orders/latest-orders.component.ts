import { Component, OnInit } from '@angular/core';
import { Order } from 'projects/admin/src/app/shared/interfaces/order.interface';
import { faPlusSquare, faWindowClose, faCheckSquare, faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-latest-orders',
  templateUrl: './latest-orders.component.html',
  styleUrls: ['./latest-orders.component.scss']
})
export class LatestOrdersComponent implements OnInit {

  newOrder = faPlusSquare;
  fulfilledOrder = faCheckSquare;
  processingOrder = faExternalLinkSquareAlt;
  cancelOrder = faWindowClose;
  constructor() { 
    this.latestOrders = [{
      customer: {name: 'Istvan Szent', address: 'Allamalapitas ter 4', phoneNumber: '+36701000001'},
      orderedFoods: [
        {name: 'Margharita Pizza', price: '$3.9', count: 1}
      ],
      fulfilledAt: new Date('10/31/2020 10:01:05 PM'),
      processingStartingAt: new Date('10/31/2020 09:54:32 PM'),
      orderedAt: new Date('10/31/2020 09:51:53 PM'),
      status: "NEW_ORDER",
    },{
      customer: {name: 'Istvan Szent', address: 'Allamalapitas ter 4', phoneNumber: '+36701000001'},
      orderedFoods: [
        {name: 'Margharita Pizza', price: '$3.9', count: 1}
      ],
      fulfilledAt: new Date('10/31/2020 10:01:05 PM'),
      processingStartingAt: new Date('10/31/2020 09:54:32 PM'),
      orderedAt: new Date('10/31/2020 09:51:53 PM'),
      status: "PROCESSING",
    },{
      customer: {name: 'Istvan Szent', address: 'Allamalapitas ter 4', phoneNumber: '+36701000001'},
      orderedFoods: [
        {name: 'Margharita Pizza', price: '$3.9', count: 1}
      ],
      fulfilledAt: new Date('10/31/2020 10:01:05 PM'),
      processingStartingAt: new Date('10/31/2020 09:54:32 PM'),
      orderedAt: new Date('10/31/2020 09:51:53 PM'),
      status: "FULFILLED",
    },{
      customer: {name: 'Istvan Szent', address: 'Allamalapitas ter 4', phoneNumber: '+36701000001'},
      orderedFoods: [
        {name: 'Margharita Pizza', price: '$3.9', count: 1}
      ],
      fulfilledAt: new Date('10/31/2020 10:01:05 PM'),
      processingStartingAt: new Date('10/31/2020 09:54:32 PM'),
      orderedAt: new Date('10/31/2020 09:51:53 PM'),
      status: "CANCELED",
    }
    ]
  }

  latestOrders: Order[] = [];
  ngOnInit(): void {

  }

}
