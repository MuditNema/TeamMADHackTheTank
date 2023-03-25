import { UserJourneyGraphComponent } from './user-journey-graph/user-journey-graph.component';
import { ScholarshipDetailComponent } from './scholarship-detail/scholarship-detail.component';
import { ScholarshipListComponent } from './scholarship-list/scholarship-list.component';
import { SignupComponent } from './signup/signup.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'scholarship', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'scholarship', component: ScholarshipListComponent },
  { path: 'scholarship/:id', component: ScholarshipDetailComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'dashboard', component: UserJourneyGraphComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
