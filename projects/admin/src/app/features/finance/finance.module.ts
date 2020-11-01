import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { FinanceComponent } from './components/finance/finance.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: FinanceComponent}
        ])
    ],
    declarations: [FinanceComponent]
})
export class FinanceModule {}
