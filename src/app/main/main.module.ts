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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { SemesterComponent } from './school-record/semester/semester.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider'
import {MatListModule} from '@angular/material/list';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MatIconModule } from '@angular/material/icon';
import { DisciplinesFilterPipe } from './filters/disciplines-filter.pipe'
import { MatRadioModule } from '@angular/material/radio';
import { DisciplineComponent } from './school-record/discipline/discipline.component'
import { MatTooltipModule } from '@angular/material/tooltip'
import { NgxMaskModule } from 'ngx-mask';
import { DisciplineModalComponent } from './disciplines/discipline-modal/discipline-modal.component'
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    MainComponent,
    NavBarComponent,
    DisciplinesComponent,
    DisciplineCardComponent,
    SchoolRecordComponent,
    SupportComponent,
    SemesterComponent,
    MyProfileComponent,
    DisciplinesFilterPipe,
    DisciplineComponent,
    DisciplineModalComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatToolbarModule,
    FontAwesomeModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatExpansionModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    MatRadioModule,
    MatTooltipModule,
    NgxMaskModule.forChild(),
    MatDialogModule
  ]
})
export class MainModule { }
