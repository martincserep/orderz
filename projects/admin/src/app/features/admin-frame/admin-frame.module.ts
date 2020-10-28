import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminFrameComponent } from './components/admin-frame/admin-frame.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', loadChildren: () => import('../home/home.module').then(m => m.HomeModule) },
            { path: 'foods', loadChildren: () => import('../foods/foods.module').then(m => m.FoodsModule) }
        ])
    ],
    declarations: [AdminFrameComponent]
})
export class AdminFrameModule {}