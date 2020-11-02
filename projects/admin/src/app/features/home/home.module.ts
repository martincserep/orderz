import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TotalSalesComponent } from './components/total-sales/total-sales.component';
import { ChartModule } from 'primeng/chart';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LatestOrdersComponent } from './components/latest-orders/latest-orders.component';
import { ButtonModule } from 'primeng/button';
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
    declarations: [HomeComponent, TotalSalesComponent, LatestOrdersComponent]
})

export class HomeModule {}
