import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminFrameComponent } from './components/admin-frame/admin-frame.component';
import { SidebarModule } from 'primeng/sidebar';
import { EmployeeInfoComponent } from './components/employee-info/employee-info.component';
import { ButtonModule } from 'primeng/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
    imports: [
        SidebarModule,
        ButtonModule,
        FontAwesomeModule,
        RouterModule.forChild([
            { path: '', component: AdminFrameComponent, children: [
                { path: '', pathMatch: 'full', redirectTo: 'home' },
                { path: 'home', loadChildren: () => import('../home/home.module').then(m => m.HomeModule) },
                { path: 'orders', loadChildren: () => import('../orders/orders.module').then(m => m.OrdersModule) },
                { path: 'foods', loadChildren: () => import('../foods/foods.module').then(m => m.FoodsModule) },
                { path: 'finance', loadChildren: () => import('../finance/finance.module').then(m => m.FinanceModule) },
                { path: 'reports', loadChildren: () => import('../reports/reports.module').then(m => m.ReportsModule) },
                { path: 'settings', loadChildren: () => import('../settings/settings.module').then(m => m.SettingsModule) },
            ]}
        ])
    ],
    declarations: [AdminFrameComponent, EmployeeInfoComponent]
})
export class AdminFrameModule {}