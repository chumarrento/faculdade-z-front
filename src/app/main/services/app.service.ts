import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Discipline } from 'src/app/interfaces/Discipline';
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
    )
  }
}
