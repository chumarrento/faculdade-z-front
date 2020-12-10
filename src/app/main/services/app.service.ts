import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Discipline } from 'src/app/interfaces/Discipline';
import { SchoolRecord } from 'src/app/interfaces/SchoolRecord';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  API_URL = environment.API_URL

  constructor(
    private router: Router,
    private httpClient: HttpClient
  ) { }

  getCurrentSemesterInfo(): Observable<Discipline[]> {
    return this.httpClient.get<Discipline[]>(`${this.API_URL}/students/me/current-semester-info`);
  }

  postFeedbackMessage(feedback: { message: string }) {
    return this.httpClient.post(
      `${this.API_URL}/feedback`,
      feedback
    );
  }

  getSchoolRecord(): Observable<SchoolRecord[]> {
    return this.httpClient.get<SchoolRecord[]>(`${this.API_URL}/students/me/school-records`);
  }

  updatePassword(data: { old_password: string, new_password: string, new_password_confirmation: string }) {
    return this.httpClient.put(`${this.API_URL}/students/me/change-password`, data)
  }

  updateMe(data: { name: string, email: string, cpf: string}) {
    return this.httpClient.put(`${this.API_URL}/students/me`, data)
  }
}
