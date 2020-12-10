import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import { AlertService } from 'src/app/alert/alert.service';
import { LoginService } from 'src/app/Auth/login.service';
import { Student } from 'src/app/interfaces/Student';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {
  faCheck = faCheck
  faTimes = faTimes

  hideOldPass = true
  hideNewPass = true
  hideNewPassConfirmation = true
  student: Student | undefined

  passwordNotMatched = false

  public editProfileForm = this.formBuilder.group({
    name: [''],
    email: ['', Validators.email],
    cpf: ['', [Validators.minLength(11), Validators.maxLength(11)]]
  })

  public securityForm = this.formBuilder.group({
    old_password: ['', Validators.required],
    new_password: ['', Validators.required],
    new_password_confirmation: ['', Validators.required]
  })

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private appService: AppService,
    private alertService: AlertService
  ) { 
    this.loginService.currentStudent.subscribe((student: Student) => this.student = student)
  }

  ngOnInit(): void {
    this.editProfileForm.controls['name'].setValue(this.student?.name)
    this.editProfileForm.controls['email'].setValue(this.student?.email)
    this.editProfileForm.controls['cpf'].setValue(this.student?.cpf)
  }

  updateStudent() {
    if (this.editProfileForm.valid) {
      this.appService.updateMe(this.editProfileForm.value).subscribe(
        () => {
          this.alertService.success('Dados alterados com sucesso!')
        },
        () => {
          this.alertService.error('Ocorreu um erro ao tentar alterar os dados :(')
        }
      )
    }
  }

  securitySubmit() {
    if (this.securityForm.controls['new_password'].value !== this.securityForm.controls['new_password_confirmation'].value) {
      this.passwordNotMatched = true
    } else {
      this.passwordNotMatched = false
    }
    
    if (this.securityForm.valid && !this.passwordNotMatched) {
      this.appService.updatePassword(this.securityForm.value).subscribe(
        () => {
          this.alertService.success('Senha alterada com sucesso!')
        },
        () => {
          this.alertService.error('Ocorreu um erro ao tentar alterar a senha :(')
        }
      )
    }
  }
}
