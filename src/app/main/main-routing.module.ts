import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisciplinesComponent } from './disciplines/disciplines.component';
import { MainComponent } from './main.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { SchoolRecordComponent } from './school-record/school-record.component';
import { SupportComponent } from './support/support.component';


const routes: Routes = [
    { path: "", component: MainComponent, children: [
      { path: "", component: DisciplinesComponent },
      { path: "school-record", component: SchoolRecordComponent },
      { path: "support", component: SupportComponent },
      { path: "my-profile", component: MyProfileComponent }
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
