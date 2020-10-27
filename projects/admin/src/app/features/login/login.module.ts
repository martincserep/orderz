import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: LoginComponent }
        ])
    ],
    declarations: [LoginComponent]
})
export class LoginModule {}
