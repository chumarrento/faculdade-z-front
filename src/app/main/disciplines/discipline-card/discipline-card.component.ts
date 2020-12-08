import { Component, Input, OnInit } from '@angular/core';
import { Discipline } from 'src/app/interfaces/Discipline';

@Component({
  selector: 'app-discipline-card',
  templateUrl: './discipline-card.component.html',
  styleUrls: ['./discipline-card.component.scss']
})
export class DisciplineCardComponent implements OnInit {
  @Input() discipline: Discipline | undefined

  constructor() { }

  ngOnInit(): void {
  }

}
