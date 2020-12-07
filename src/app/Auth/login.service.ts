import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { tap } from "rxjs/operators";
import { User } from '../interfaces/Student';

type LoginTypes = {
  cpf: string
  password: string
}

type LoginResultTypes = {
  user: User
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
