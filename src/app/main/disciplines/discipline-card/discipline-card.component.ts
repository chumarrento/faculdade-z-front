import { Component, Input, OnInit } from '@angular/core';
import { Discipline } from 'src/app/interfaces/Discipline';
import { MatDialog } from '@angular/material/dialog'
import { 
  faBrain, 
  faChalkboardTeacher, 
  faClipboard,
  faGraduationCap,
  faCalendarAlt 
} from '@fortawesome/free-solid-svg-icons'
import { DisciplineModalComponent } from '../discipline-modal/discipline-modal.component';

@Component({
  selector: 'app-discipline-card',
  templateUrl: './discipline-card.component.html',
  styleUrls: ['./discipline-card.component.scss']
})
export class DisciplineCardComponent implements OnInit {
  @Input() discipline: Discipline | undefined;
  faBrain = faBrain;
  faChalkboardTeacher = faChalkboardTeacher;
  faClipboard = faClipboard;
  faGraduationCap = faGraduationCap;
  faCalendarAlt = faCalendarAlt
  
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openModal() {
    this.dialog.open(DisciplineModalComponent, {
      width: '500px',
      data: { discipline: this.discipline }
    })
  }
}
