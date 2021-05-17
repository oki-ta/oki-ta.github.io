import { sports } from "./Isports";

// 共通定義
export class Common {
    static readonly SHOP_SELECT = [
        '関東1',
        '関東2',
        '関東3',
        '関東4',
        '関東5',
        '関東6',
        '関東7',
        '関東8',
        '関東9',
        '関東10',
    ];

    static readonly TEST_R = `${Common.SHOP_SELECT[0]}支店`;


    // メソッド
    createSportsMember():sports{
        let sport: sports;// インターフェイスの実装
        return sport;
    }

}

