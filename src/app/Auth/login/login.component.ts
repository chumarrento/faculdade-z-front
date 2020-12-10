import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { AlertService } from 'src/app/alert/alert.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public authForm = this.formBuilder.group({
    cpf: [
      '',
      [
        Validators.required,
        Validators.minLength(11),
        Validators.maxLength(11)
      ]
    ],
    password: ['', Validators.required]
  })

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private alertService: AlertService
  ) {}

  
  ngOnInit(): void {}

  submit() {
    this.loginService.login(this.authForm.value).subscribe(
      () => {
        setTimeout(() => {
          this.router.navigateByUrl('main');
        }, 1000);
      },
      response => {
        this.alertService.error(response.error.message)
      }
    )
  }
}
