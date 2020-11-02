import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Order } from '../../../shared/interfaces/order.interface';
import { ApiService } from '../../../shared/services/api.service';

@Injectable({
    providedIn: 'root'
})
export class LatestOrdersService {

    getLatestOrders(): Observable<Order[]> {
        return this.apiService.get('orders');
    }

    constructor(private apiService: ApiService) { }
}
