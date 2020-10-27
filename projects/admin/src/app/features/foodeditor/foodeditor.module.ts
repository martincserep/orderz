import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { FoodeditorComponent } from './components/foodeditor/foodeditor.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: FoodeditorComponent }
        ])
    ],
    declarations: [FoodeditorComponent]
})
export class FoodEditorModule {}
