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
  shopname?: string;
  discriotion?: string;
  options?: { name: string; param: any }[];
}

export interface editOptions {
  // option1?:
  //  {

  name: string;
  param: any;

  // };

  // option2?: {
  //   name: string;
  //   param: any;
  // };

  // option3?: {
  //   name: string;
  //   param: any;
  // };
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
    discription?: string;
    shopname?: string;
    options?: {
      // option1?: {
      name: string;
      param: any;
      //   };
      // option2?: { name: string; param: any };
      // option3?: { name: string; param: any };
    }[];
  };
  status?: string;
}

// API用：ケーキの商品情報取得
export interface cakeDetailArray {
  cakeData: cakeDetailData;
  // status?: string;
}

// next katateigi is kuso
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
  discription?: string;
  options?: { name: string; param: any }[];
}

// API用：ケーキの商品情報取得
export interface cartDataArray {
  data?: cartData[];
  count?: number;
  status: string;
}

export interface cartData {
  cartId?: number;
  itemId?: number;
  itemName?: any;
  imageUrl?: any;
  imageUr2?: any;
  price?: number;
  peaceCount?: number;
  priceHole?: number;
  pricePieace?: number;
  code?: string;
  discription?: string;
  options?: { name: string; param: number; count: number }[];
}

// {
//   cartId: 0,
//   itemnId: 0,
//   itemName: '---',
//   imageUrl: '---',
//   imageUr2: '---',
//   price: 100,
//   peaceCount: 1,
//   // priceHole: '---',
//   // pricePieace: '---',
//   // kcal: '---',
//   code: '---',
//   // discription: '--',
//   options: [
//     { name: '--', param: '--', count: 1 },
//     { name: '--', param: '--', count: 1 },
//     { name: '--', param: '--', count: 1 },
//   ],
// },
