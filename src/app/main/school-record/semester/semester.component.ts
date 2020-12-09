import { Component, Input, OnInit } from '@angular/core';
import { Discipline } from 'src/app/interfaces/Discipline';

@Component({
  selector: 'app-semester',
  templateUrl: './semester.component.html',
  styleUrls: ['./semester.component.scss']
})
export class SemesterComponent implements OnInit {
  @Input() semester: number | undefined
  @Input() disciplines: Discipline[]
  constructor() { 
    this.disciplines = []
  }

  ngOnInit(): void {
  }

}
