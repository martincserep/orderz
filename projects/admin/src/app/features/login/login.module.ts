import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: LoginComponent }
        ]),
        ReactiveFormsModule,
        CommonModule,
        ButtonModule,
        InputTextModule,
        ProgressSpinnerModule
    ],
    declarations: [LoginComponent]
})
export class LoginModule {}
