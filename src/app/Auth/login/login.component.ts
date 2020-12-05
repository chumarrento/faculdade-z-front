import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private FormBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {}

  public error: string

  public authForm = this.FormBuilder.group({
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

  ngOnInit(): void {}

  submit() {
    this.loginService.login(this.authForm.value).subscribe(
      () => {
        setTimeout(() => {
          this.router.navigateByUrl('main');
        }, 1000);
      },
      response => {
        this.error = response.error.message;
        setTimeout(() => {
          this.error = "";
        }, 5000);
      }
    )
  }
}