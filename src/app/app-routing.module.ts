import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AwardsComponent } from './components/awards/awards.component';
import { ContactComponent } from './components/contact/contact.component';
import { GovernmentComponent } from './components/government/government.component';
import { GroupsComponent } from './components/groups/groups.component';
import { HomeComponent } from './components/home/home.component';
import { InformationComponent } from './components/information/information.component';
import { LogopedComponent } from './components/logoped/logoped.component';
import { PhysicalexerciseComponent } from './components/physicalexercise/physicalexercise.component';
import { PsychologyComponent } from './components/psychology/psychology.component';
import { RoboticsComponent } from './components/robotics/robotics.component';
import { ScheduleComponent } from './components/schedule/schedule.component';

const routes: Routes = [
  {path: '',  redirectTo: 'home', pathMatch: 'full'},
  {path:'home', component: HomeComponent},
  {path:'information', component: InformationComponent},
  {path:'contact', component: ContactComponent},
  {path:'groups', component: GroupsComponent},
  {path:'schedule', component: ScheduleComponent },
  {path:'robotics', component: RoboticsComponent},
  {path:' awards', component: AwardsComponent},
  {path:'physicalexercise', component: PhysicalexerciseComponent},
  {path:'psychology',component: PsychologyComponent},
  {path:'logoped', component: LogopedComponent},
  {path:'government', component: GovernmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
