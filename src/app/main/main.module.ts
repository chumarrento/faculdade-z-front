import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DisciplinesComponent } from './disciplines/disciplines.component';
import { DisciplineCardComponent } from './disciplines/discipline-card/discipline-card.component';
import { MatCardModule } from '@angular/material/card';
import { SchoolRecordComponent } from './school-record/school-record.component';
import { SupportComponent } from './support/support.component'

@NgModule({
  declarations: [
    MainComponent,
    NavBarComponent,
    DisciplinesComponent,
    DisciplineCardComponent,
    SchoolRecordComponent,
    SupportComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatToolbarModule,
    FontAwesomeModule,
    MatCardModule
  ]
})
export class MainModule { }
