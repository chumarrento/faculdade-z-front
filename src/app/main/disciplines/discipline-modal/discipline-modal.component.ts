import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Discipline } from 'src/app/interfaces/Discipline';

type DialogData  = {
  discipline: Discipline
}
@Component({
  selector: 'app-discipline-modal',
  templateUrl: './discipline-modal.component.html',
  styleUrls: ['./discipline-modal.component.scss']
})
export class DisciplineModalComponent implements OnInit {
  
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit(): void {
  }

}
