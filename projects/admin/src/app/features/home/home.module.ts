import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: HomeComponent }
        ]),
    ],
    declarations: [HomeComponent]
})

export class HomeModule {}
