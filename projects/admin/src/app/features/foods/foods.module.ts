import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { FoodsComponent } from './components/foods/foods.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: FoodsComponent }
        ])
    ],
    declarations: [FoodsComponent]
})
export class FoodsModule {}
