import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TotalSalesComponent } from './components/total-sales/total-sales.component';
import { ChartModule } from 'primeng/chart';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LatestOrdersComponent } from './components/latest-orders/latest-orders.component';
import { ButtonModule } from 'primeng/button';
import { MockInterceptorGlobals } from '../../shared/globals/mock.interceptor.globals';
import { of } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { LatestOrdersService } from './services/latest-orders.service';
import { LATEST_ORDERS } from './consts/latest-orders.const';

MockInterceptorGlobals.mockInterceptorCallback = (req, url, next) => {
    if (url.pathname === '/orders' && req.method === 'GET') {
        console.log('resp');
        
        return of(new HttpResponse({
            body: LATEST_ORDERS,
            status: 200
        }))
    }
    return next.handle(req);
}
@NgModule({
    imports: [
        ChartModule,
        CommonModule,
        FontAwesomeModule,
        ButtonModule,
        RouterModule.forChild([
            { path: '', component: HomeComponent }
        ]),
    ],
    declarations: [HomeComponent, TotalSalesComponent, LatestOrdersComponent],
    providers: [LatestOrdersService]
})

export class HomeModule {}
