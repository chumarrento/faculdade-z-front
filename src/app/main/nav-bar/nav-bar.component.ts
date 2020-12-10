import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { LoginService } from 'src/app/Auth/login.service';
import { Student } from 'src/app/interfaces/Student';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  faCaretDown = faCaretDown;
  currentStudent: Student | undefined

  constructor(
    private router: Router,
    private loginService: LoginService
  ) {
    this.loginService.currentStudent.subscribe((student: Student) => this.currentStudent = student);
  }

  ngOnInit(): void {}

  logout() {
    this.loginService.logout()
    this.router.navigateByUrl('/login')
  }
}
