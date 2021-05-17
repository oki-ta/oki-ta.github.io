import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ResultModel } from './model/result-model';
import { ShopQueryEntity } from './model/shop-query-entity';
import { ShopQueryModel } from './model/shop-query-model';
import { ShopResultModel } from './model/shop-result-model';
import { HttpClient } from '@angular/common/http'
import { ShopResultEntity } from './model/shop-result-entity';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  private host: string = 'http://localhost:4200/app';

  constructor(
    private http: HttpClient,
  ) { }

  // 店舗検索メソッド
  public search(query: ShopQueryModel): Observable<ResultModel> {

    // 検索条件エンティティに移送する
    const req = new ShopQueryEntity();
    req.facility_name = query.facilityName;
    req.shop_name_call = query.shopNameCall;

    // 
    let res: ShopResultModel[] = this.mock(req);
    //　結果モデルを初期化する。
    const resModel = new ResultModel();
    resModel.result = res;
    resModel.resultNumber = 10;
    resModel.errorCode = '200';
    
    // this.http.get(this.host + '/get').toPromise().then(res =>{
    //   const model = res;
    // })
    return of(resModel);
  }

  /**
   * mock用メソッド
   */
  public mock(query: ShopQueryEntity) :ShopResultModel[] {
    const shopResult = [];
    for (let i = 1; i < 11; i++) {
      const res = new ShopResultModel();
      res.facilityId = '00' + i;
      res.facilityName = '関東' + i;
      res.shopId = '000' + i;
      res.shopNameCall = 'マクドナルド'
      res.Sales = 10000000 + i;
      res.numberOfShopMember = 100 + i;
      shopResult.push(res);
    }
    return shopResult
  }
}

