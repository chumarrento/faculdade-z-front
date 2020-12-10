import { Component, OnInit } from '@angular/core';
import { Discipline } from 'src/app/interfaces/Discipline';
import { SchoolRecord } from 'src/app/interfaces/SchoolRecord';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-school-record',
  templateUrl: './school-record.component.html',
  styleUrls: ['./school-record.component.scss']
})
export class SchoolRecordComponent implements OnInit {
  schoolRecords: SchoolRecord[]
  disciplines: Discipline[]
  radioFilter: string | undefined
  searchText: string = ""

  constructor(private service: AppService) {
    this.schoolRecords = []
    this.disciplines = []
  }

  ngOnInit(): void {
    this.service.getSchoolRecord().subscribe(
      (schoolRecords: SchoolRecord[]) => {
        this.schoolRecords = schoolRecords
        
        this.schoolRecords.forEach((schoolRecord: SchoolRecord) => {
          schoolRecord.disciplines.forEach(discipline => {
            this.disciplines.push(discipline)
          })
        })
      }
    )
  }

  changeFilter(event: any) {
    console.log(this.radioFilter)
  }
}
