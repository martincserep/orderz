import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from './shared/guards/login.guard';
import { LogoutGuard } from './shared/guards/logout.guard';

const routes: Routes = [
  { path: '', loadChildren: () => import('./features/admin-frame/admin-frame.module').then(m => m.AdminFrameModule), canActivate: [LoginGuard] },
  { path: 'login', loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule), canActivate: [LogoutGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
