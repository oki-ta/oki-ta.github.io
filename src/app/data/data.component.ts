import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ShopQueryModel } from '../model/shop-query-model';
import { ShopResultModel } from '../model/shop-result-model';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

  /**
   * テーブルモデル
   */
  @Input()
  public model: ShopResultModel[];
  public display: string[];
  public shopIdLink: string[];

  /**
   * データテーブルパーツ
   */

  @Output()
  public linkClick = new EventEmitter<(string | number)[]>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.model);
    this.display = [];
    this.shopIdLink = [];
    for (let i = 0; i < this.model.length; i++) {
      const a = `${this.model[i].shopNameCall} (${this.model[i].facilityName} 支店)` ;
      this.display.push(a);

      const b = this.model[i].shopId;
      this.shopIdLink.push(b);
    }
    console.log(this.shopIdLink);
      // this.display = `${this.query.shopNameCall} (${this.query.facilityName} 支店)` ;
  }

  /**
   * リンククリック処理
   */
  public onLinkClick(value){
    this.linkClick.emit(value); 
  }
}
