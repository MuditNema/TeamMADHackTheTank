import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScholarshipListComponent } from './scholarship-list/scholarship-list.component';
import { ScholarshipDetailComponent } from './scholarship-detail/scholarship-detail.component';
import { EventDirective } from './directives/event.directive';
import { UserListComponent } from './user-list/user-list.component';
import { UserJourneyGraphComponent } from './user-journey-graph/user-journey-graph.component';
import { TncComponent } from './scholarship-detail/tnc/tnc.component';
import { ReviewComponent } from './scholarship-detail/review/review.component';
import { DownloadrulebookComponent } from './scholarship-detail/review/downloadrulebook/downloadrulebook.component';
import { VisitedSponserComponent } from './scholarship-detail/tnc/visited-sponser/visited-sponser.component';
// import { FollowUpComponent } from './scholarship-detail/tnc/follow-up/follow-up.component';
import { DocUploadComponent } from './scholarship-detail/applied/doc-upload/doc-upload.component';
import { EmailComponent } from './scholarship-detail/applied/doc-upload/email/email.component';
import { ReUploadComponent } from './scholarship-detail/applied/doc-upload/re-upload/re-upload.component';
import { EnquiryComponent } from './scholarship-detail/tnc/enquiry/enquiry.component';
import { AppliedComponent } from './scholarship-detail/applied/applied.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    ScholarshipListComponent,
    ScholarshipDetailComponent,
    EventDirective,
    UserListComponent,
    UserJourneyGraphComponent,
    TncComponent,
    ReviewComponent,
    DownloadrulebookComponent,
    VisitedSponserComponent,
    DocUploadComponent,
    EmailComponent,
    ReUploadComponent,
    EnquiryComponent,
    AppliedComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
