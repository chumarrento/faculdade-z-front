import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/alert/alert.service';
import { LoginService } from 'src/app/Auth/login.service';
import { Discipline } from 'src/app/interfaces/Discipline';
import { SchoolRecord } from 'src/app/interfaces/SchoolRecord';
import { Student } from 'src/app/interfaces/Student';
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
  emailDisabled: boolean | undefined

  constructor(
    private appService: AppService,
    private loginService: LoginService,
    private alertService: AlertService
  ) {
    this.schoolRecords = []
    this.disciplines = []
  }

  ngOnInit(): void {
    this.appService.getSchoolRecord().subscribe(
      (schoolRecords: SchoolRecord[]) => {
        this.schoolRecords = schoolRecords
        
        this.schoolRecords.forEach((schoolRecord: SchoolRecord) => {
          schoolRecord.disciplines.forEach(discipline => {
            this.disciplines.push(discipline)
          })
        })
      }
    )

    this.loginService.currentStudent.subscribe(
      (student: Student) => {
        this.emailDisabled = !student.email_verified_at ? true : false
      }
    )
  }

  downloadReport() {
    this.appService.downloadSchoolRecordReport().subscribe(
      (response: any) => {
        const file = new Blob([response], {
          type: response.type
        })
        
        const blob = window.URL.createObjectURL(file)

        const link = document.createElement('a')
        link.href = blob
        link.download = 'Histórico.pdf'
        link.click()

        window.URL.revokeObjectURL(blob)
        link.remove()
      },
      () => {
        this.alertService.error('Ocorreu um erro ao tentar fazer o download do histórico :(')
      }
    )
  }

  sendReportToEmail() {
    this.appService.sendSchoolRecordReportToEmail().subscribe(
      () => {
        this.alertService.success('E-mail enviado com sucesso!')
      },
      () => {
        this.alertService.error('Ocorreu um erro ao tentar enviar o e-mail :(')
      }
    )
  }
}
