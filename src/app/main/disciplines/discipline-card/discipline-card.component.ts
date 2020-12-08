import { Component, Input, OnInit } from '@angular/core';
import { Discipline } from 'src/app/interfaces/Discipline';
import { 
  faBrain, 
  faChalkboardTeacher, 
  faClipboard,
  faGraduationCap,
  faCalendarAlt 
} from '@fortawesome/free-solid-svg-icons'

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
  
  constructor() { }

  ngOnInit(): void {
  }

}
