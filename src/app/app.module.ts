import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { InformationComponent } from './components/information/information.component';
import { ContactComponent } from './components/contact/contact.component';
import { GroupsComponent } from './components/groups/groups.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { RoboticsComponent } from './components/robotics/robotics.component';
import { AwardsComponent } from './components/awards/awards.component';
import { PhysicalexerciseComponent } from './components/physicalexercise/physicalexercise.component';
import { PsychologyComponent } from './components/psychology/psychology.component';
import { LogopedComponent } from './components/logoped/logoped.component';
import { GovernmentComponent } from './components/government/government.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InformationComponent,
    ContactComponent,
    GroupsComponent,
    ScheduleComponent,
    RoboticsComponent,
    AwardsComponent,
    PhysicalexerciseComponent,
    PsychologyComponent,
    LogopedComponent,
    GovernmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
