import { Component, OnInit } from '@angular/core';
import { QuizDialogComponent } from '../quiz-dialog/quiz-dialog.component';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  // 血液型配列
  public bloodType = ['A型','B型','O型','AB型','F型'];

  // ユーザーに選択された血液型
  public selectedBloodType: string;

  // 不正解表示フラグ
  public incorrectFlg: boolean;

  constructor(public dialog: MatDialog) { } // TODO 

  ngOnInit(): void {
  }

  //　血液型選択イベント
  onSelected(value: MatSelectChange){
    this.selectedBloodType = value.value;
  }

  // 解答するボタンクリックイベント
  onClick(){
    this.incorrectFlg = false;
    if(this.selectedBloodType === 'A'){
      this.incorrectFlg = false;
      this.dialog.open(QuizDialogComponent,{
        data:this.selectedBloodType
      })
    } else {
      this.incorrectFlg = true;
    }
  }

}
