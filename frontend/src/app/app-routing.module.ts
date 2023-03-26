import { HeatmapComponent } from './heatmap/heatmap.component';
import { UserJourneyGraphComponent } from './user-journey-graph/user-journey-graph.component';
import { ScholarshipDetailComponent } from './scholarship-detail/scholarship-detail.component';
import { ScholarshipListComponent } from './scholarship-list/scholarship-list.component';
import { SignupComponent } from './signup/signup.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user-list/user-list.component';
import { TncComponent } from './scholarship-detail/tnc/tnc.component';
import { ReviewComponent } from './scholarship-detail/review/review.component';
import { DownloadrulebookComponent } from './scholarship-detail/review/downloadrulebook/downloadrulebook.component';
import { DocUploadComponent } from './scholarship-detail/applied/doc-upload/doc-upload.component';
import { EmailComponent } from './scholarship-detail/applied/doc-upload/email/email.component';
import { VisitedSponserComponent } from './scholarship-detail/tnc/visited-sponser/visited-sponser.component';
import { EnquiryComponent } from './scholarship-detail/tnc/enquiry/enquiry.component';
import { AppliedComponent } from './scholarship-detail/applied/applied.component';

const routes: Routes = [
  { path: '', redirectTo: 'scholarship', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'scholarship', component: ScholarshipListComponent },
  { path: 'scholarship/:id', component: ScholarshipDetailComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'dashboard/:id', component: UserJourneyGraphComponent },
  {path:'scholarship/:id/tnc',component:TncComponent},
  {path:'scholarship/:id/peerReview',component:ReviewComponent},
  {path:'scholarship/:id/downloadRulebook',component:DownloadrulebookComponent },
  {path:'scholarship/:id/docUpload',component:DocUploadComponent},
  {path:'scholarship/:id/email',component:EmailComponent},
  {path:'scholarship/:id/visitSponsor',component:VisitedSponserComponent},
  {path:'scholarship/:id/enquiry',component:EnquiryComponent},
  {path:'scholarship/:id/applied',component:AppliedComponent},
  { path: 'heatmap/:id/:uid', component: HeatmapComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
