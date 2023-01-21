// typescript型情報の定義ファイル

// 商品ボックスのデータ定義
export interface itemData {
  id?: number;
  itemName?: any;
  imageUrl?: any;
  priceHole?: any;
  pricePieace?: any;
  kcal?: any;
  clickFunction: (id: number) => void; //商品詳細情報取得用関数
}
[];

//
export interface cakeDetailData {
  id?: number;
  itemName?: any;
  imageUrl?: any;
  imageUr2?: any;
  priceHole?: any;
  pricePieace?: any;
  kcal?: any;
  code?: string;
  discriotion?: string;
  options?: {
    option1?: { name: string; param: any };
    option2?: { name: string; param: any };
    option3?: { name: string; param: any };
  };
}

// Reduxの型の設定
export interface dataList {
  itemlist?: {
    id?: number;
    itemName?: any;
    imageUrl?: any;
    priceHole?: any;
    pricePieace?: any;
    kcal?: any;
    code?: string;
  }[];
  status: string;
}

// Reduxの型の設定
export interface cakeDetail {
  cakeData?: {
    id?: number;
    itemName?: any;
    imageUrl?: any;
    imageUr2?: any;
    priceHole?: any;
    pricePieace?: any;
    kcal?: any;
    code?: string;
    discriotion?: string;
    options?: {
      option1?: { name: string; param: any };
      option2?: { name: string; param: any };
      option3?: { name: string; param: any };
    };
  };
  status?: string;
}

// API用：ケーキの商品情報取得
export interface cakeDetailArray {
  cakeData: {
    id?: number;
    itemName?: any;
    imageUrl?: any;
    imageUr2?: any;
    priceHole?: any;
    pricePieace?: any;
    kcal?: any;
    code?: string;
    discriotion?: string;
    options?: {
      option1?: { name: string; param: any };
      option2?: { name: string; param: any };
      option3?: { name: string; param: any };
    };
  }[];
  // status?: string;
}

// "cakeData": [
//   {
//     "id": "1",
//     "itemName": "モンブランs",
//     "imageUrl": "imageUrl",
//     "imageUrl2": "imageUrl",
//     "priceHole": "priceHole",
//     "pricePieace": "pricePieace",
//     "kcal": "kcal",
//     "code": "1A",
//     "discription": "",
//     "shopname": "",
//     "options": {
//       "option1": { "name": "name1", "param": "200" },
//       "option2": { "name": "name2", "param": "300" },
//       "option3": { "name": "name3", "param": "400" }
//     }
//   }
// ]
