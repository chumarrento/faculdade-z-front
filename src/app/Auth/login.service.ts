import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { tap } from "rxjs/operators";

type LoginTypes = {
  cpf: string
  password: string
}

type CourseTypes = {
  id: number
  name: string
  semesters: number
  created_at: Date
  updated_at: Date
}

type UserTypes = {
  id: number
  name: string
  cpf: string,
  email: string
  registration: string
  current_semester: number
  course_id: number
  created_at: Date,
  updated_at: Date,
  course: CourseTypes
}

type LoginResultTypes = {
  user: UserTypes
  token: string
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  readonly API_URL = environment.API_URL

  constructor(
    private httpClient: HttpClient
  ) { }

  login(credentials: LoginTypes) {
    return this.httpClient
      .post<LoginResultTypes>(`${this.API_URL}/login`, credentials)
      .pipe(
        tap((response: LoginResultTypes) => {
          sessionStorage.setItem("token", response.token)
        })
      )
  }

  isAuth(): boolean {
    return sessionStorage.getItem('token') ? true : false
  }

  logout(): void {
    sessionStorage.removeItem('token')
  }
}
