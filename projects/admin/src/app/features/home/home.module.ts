import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TotalSalesComponent } from './components/total-sales/total-sales.component';
import { ChartModule } from 'primeng/chart';
import { LatestOrdersComponent } from './components/latest-orders/latest-orders.component';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
    imports: [
        ChartModule,
        CommonModule,
        FontAwesomeModule,
        RouterModule.forChild([
            { path: '', component: HomeComponent }
        ]),
    ],
    declarations: [HomeComponent, TotalSalesComponent, LatestOrdersComponent]
})

export class HomeModule {}
