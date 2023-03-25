import { ScholarshipDetailComponent } from './scholarship-detail/scholarship-detail.component';
import { ScholarshipListComponent } from './scholarship-list/scholarship-list.component';
import { SignupComponent } from './signup/signup.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'scholarship', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'scholarship', component: ScholarshipListComponent },
  { path: 'scholarship/:id', component: ScholarshipDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
