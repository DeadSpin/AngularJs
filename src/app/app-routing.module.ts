import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListUsersComponent } from './list-users/list-users.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'list-users', component: ListUsersComponent},
  {path: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
