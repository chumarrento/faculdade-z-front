import { Component, OnInit } from '@angular/core';
import { Discipline } from 'src/app/interfaces/Discipline';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-disciplines',
  templateUrl: './disciplines.component.html',
  styleUrls: ['./disciplines.component.scss']
})
export class DisciplinesComponent implements OnInit {
  disciplines: Discipline[]

  constructor(private service: AppService) {
    this.disciplines = []
  }

  ngOnInit(): void {
    this.service.getCurrentSemesterInfo().subscribe(
      (disciplines: Discipline[]) => this.disciplines = disciplines
    )
  }

}
