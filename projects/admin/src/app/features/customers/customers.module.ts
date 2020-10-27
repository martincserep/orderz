import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { CustomersComponent } from './components/customers/customers.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: CustomersComponent }
        ])
    ],
    declarations: [CustomersComponent]
})
export class CustomersModule {}
