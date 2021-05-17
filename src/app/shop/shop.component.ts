import { Component, OnInit, ViewChild } from '@angular/core';
import { ShopQueryModel } from 'src/app/model/shop-query-model'
import { Common } from '../common/common';
import { ResultModel } from '../model/result-model';
import { ShopResultModel } from '../model/shop-result-model';
import { ShopDialogComponent } from '../shop-dialog/shop-dialog.component';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  @ViewChild(ShopDialogComponent, {static: true})
  private dialog: ShopDialogComponent;
  

  public message: string = '【店舗検索画面】';

  public selectMessage = '選択してください';

  /**
   * 検索条件開閉状態
   */
  public displaySearchConditions: boolean;


  /**
   * 施設名セレクトボックスモデル
   */
  public facilitys = Common.SHOP_SELECT;

  /**
   * 店舗情報モデル
   */
  public query = new ShopQueryModel();


  /**
   *  検索結果
   */ 
  public ShopServiceResponse: ShopResultModel[] = [];

  /**
   * 店舗詳細情報
   */
  public detail: any;

  /**
   * 検索結果表示フラグ
   */
  public doSearching: boolean;

  /**
   * 検索結果なしメッセージ表示フラグ
   */
  public noResult: boolean;

  /**
   * 詳細画面非表示フラグ
   */
  public noDetail:boolean;

  /**
   * 詳細メッセージ
   */
  public detailMessage: string;

  constructor(
    private shopservice: ShopService,
  ) { 
    this.displaySearchConditions = true;
  }

  ngOnInit(): void {
    this.query = new ShopQueryModel();
  }

  /**
   * セレクトボックス選択処理
   * @param event: ValueChange<string>
   */
  public onFacilityNameSelected(event: string) {
    this.query.facilityName = event; // TODO デバッグすること。多分値がおかしい
  }
  
  /**
   * 検索
   */
  public onSearch(){
    if(this.query.facilityName && this.query.shopNameCall){
      this.doSearching = true;
      this.noResult = false;
      this.detailMessage = '';
    } else {
      this.doSearching = false;
      this.noResult = true;
      this.detailMessage = '';
    }
    
    this.shopservice.search(this.query).subscribe((res) =>{
      this.ShopServiceResponse = [];
      res.result.forEach(element => {
        this.ShopServiceResponse.push(element);
      });
  })
    
  }

  /**
   * リンククリック時処理
   */
  // public detailItem(item: (string | number)[]){
  //   //　データテーブルパーツをdata.component.tsから取得する。
  //   this.detail = [];
  //   item.forEach(element => {
  //     this.detail.push(element);
  //   });
    

  //   this.detailMessage = `${this.detail[0]}は${this.ShopServiceResponse[1].numberOfShopMember}人です。また${this.detail[1]}は${this.ShopServiceResponse[1].Sales}円です。`
  //   this.noDetail = false;
  //   this.dialog.open(this.detailMessage);
  // }

  public detailItem(item){
    console.info(item);
    const detailShop = this.ShopServiceResponse.find(e =>e.shopId === item);
    this.detailMessage = 
    `　従業員数：${detailShop.numberOfShopMember}人　年間売り上げ：${detailShop.Sales}円`
    this.dialog.open(this.detailMessage);
  }
} 
