import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
    private service: AppService
  ) {}

  ngOnInit(): void {}

  submit () {
    if(!this.supportForm.invalid) {
      this.service.postFeedbackMessage(this.supportForm.value).subscribe(
        () => {
          setTimeout(() => {
            this.router.navigateByUrl('main');
          }, 2000);
        },
        (response) => {
          console.log(response)
        }
      )
    }
  }
}
