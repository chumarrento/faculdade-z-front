import { Component, OnInit } from '@angular/core';
import { SchoolRecord } from 'src/app/interfaces/SchoolRecord';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-school-record',
  templateUrl: './school-record.component.html',
  styleUrls: ['./school-record.component.scss']
})
export class SchoolRecordComponent implements OnInit {
  schoolRecords: SchoolRecord[]
  constructor(private service: AppService) {
    this.schoolRecords = []
  }

  ngOnInit(): void {
    this.service.getSchoolRecord().subscribe(
      (schoolRecords: SchoolRecord[]) => this.schoolRecords = schoolRecords
    )
  }

}
