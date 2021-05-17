import { Component, OnInit } from '@angular/core';
import { ShopResultModel } from '../model/shop-result-model';

@Component({
  selector: 'app-shop-dialog',
  templateUrl: './shop-dialog.component.html',
  styleUrls: ['./shop-dialog.component.scss']
})
export class ShopDialogComponent implements OnInit {
  public isOpen: boolean;

  public detailMessage: string;

  constructor() { }

  ngOnInit(): void {
  }

  // ダイアログ表示処理
  open(title: string){
    this.isOpen = true;
    this.detailMessage = title;
  }

  //　ダイアログ非表示処理
  close(){ 
    this.isOpen = false;
  }

}
