import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog'; // TODO 

@Component({
  selector: 'app-quiz-dialog',
  templateUrl: './quiz-dialog.component.html',
  styleUrls: ['./quiz-dialog.component.scss']
})
export class QuizDialogComponent implements OnInit {

  // 親コンポーネントから渡された正解のデータ
  public correctData: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: string) {} // TODO 

  ngOnInit(): void {
    this.correctData = this.data;
  }
}
