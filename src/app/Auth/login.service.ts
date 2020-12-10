import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { tap } from "rxjs/operators";
import { Student } from '../interfaces/Student';
import { BehaviorSubject, Observable } from 'rxjs';

type LoginTypes = {
  cpf: string
  password: string
}

type LoginResultTypes = {
  user: Student
  token: string
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  readonly API_URL = environment.API_URL
  private currentStudentSubject: BehaviorSubject<Student>
  public currentStudent: Observable<Student>

  constructor(private httpClient: HttpClient) {
    this.currentStudentSubject = new BehaviorSubject<Student>(JSON.parse(sessionStorage.getItem('currentStudent') || '{}'));
    this.currentStudent = this.currentStudentSubject.asObservable()
  }

  public get currentStudentValue () {
    return this.currentStudentSubject.value
  }

  login(credentials: LoginTypes) {
    return this.httpClient
      .post<LoginResultTypes>(`${this.API_URL}/login`, credentials)
      .pipe(
        tap((response: LoginResultTypes) => {
          sessionStorage.setItem('token', response.token)
          sessionStorage.setItem('currentStudent', JSON.stringify(response.user))
        })
      );
  }

  isAuth(): boolean {
    return sessionStorage.getItem('token') ? true : false;
  }

  logout(): void {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('currentStudent');
  }
}
