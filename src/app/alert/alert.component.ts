import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertService } from './alert.service';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Alert } from '../interfaces/Alert';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, OnDestroy {
  private subscription: Subscription
  alert: Alert | any

  constructor(
    private alertService: AlertService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.subscription = this.alertService.getAlert().subscribe(
      (alert: Alert) => {
        
        if (alert.type == 'error') {
          alert.style = 'error'
        } else {
          alert.style = 'success'
        }
        this.alert = alert
        this.showAlert()
      }
    )
  }

  showAlert() {
    this.snackBar.open(this.alert.text, 'Fechar', {
      duration: 5000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
      panelClass: [this.alert.style || 'default']
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
