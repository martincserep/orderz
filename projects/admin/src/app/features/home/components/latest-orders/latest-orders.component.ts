import { Component } from '@angular/core';
import { Order } from 'projects/admin/src/app/shared/interfaces/order.interface';
import { faPlusSquare, faWindowClose, faCheckSquare, faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons';
import { LatestOrdersService } from '../../services/latest-orders.service';

@Component({
  selector: 'app-latest-orders',
  templateUrl: './latest-orders.component.html',
  styleUrls: ['./latest-orders.component.scss']
})
export class LatestOrdersComponent {

  newOrder = faPlusSquare;
  fulfilledOrder = faCheckSquare;
  processingOrder = faExternalLinkSquareAlt;
  cancelOrder = faWindowClose;
  constructor(private latestOrderService: LatestOrdersService) { 
    this.latestOrderService.getLatestOrders().subscribe(rsp => {
      this.latestOrders = rsp
    })
  }

  latestOrders: Order[] = [];

}
