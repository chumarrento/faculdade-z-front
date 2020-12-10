import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/alert/alert.service';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {

  public supportForm = this.formBuilder.group({
    message: ['', Validators.required]
  })

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private appService: AppService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {}

  submit () {
    if(!this.supportForm.invalid) {
      this.appService.postFeedbackMessage(this.supportForm.value).subscribe(
        () => {
          this.alertService.success('Mensagem enviada com sucesso!')
          setTimeout(() => {
            this.router.navigateByUrl('main');
          }, 1000);
        },
        () => {
          this.alertService.error('Ocorreu um erro ao tentar enviar a mensagem.')
        }
      )
    }
  }
}
