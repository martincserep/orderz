import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { OrdersComponent } from './components/orders/orders.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: OrdersComponent }
        ])
    ],
    declarations: [OrdersComponent]
})
export class OrdersModule {}