import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegisterComponent } from '../app/user-register';

const routes: Routes = [
  { path: '', redirectTo: '/userregister', pathMatch: 'full' },
  { path: 'userregister', component: UserRegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
