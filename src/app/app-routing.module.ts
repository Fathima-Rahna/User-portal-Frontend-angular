import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './module/users/users.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'users', canActivate:[authGuard], loadChildren: () => import('./module/users/users.module').then(m => m.UsersModule) },
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: HomeComponent,canActivate:[authGuard]},
  {path:'users',component: UsersComponent},
  // { path: 'users', loadChildren: () => import('./module/users/users.module').then(m => m.UsersModule) } // Corrected import path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
