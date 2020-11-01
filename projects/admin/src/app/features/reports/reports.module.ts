import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { ReportsComponent } from './components/reports/reports.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: ReportsComponent }
        ])
    ],
    declarations: [ReportsComponent]
})
export class ReportsModule {}