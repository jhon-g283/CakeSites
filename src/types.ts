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
// export interface cakeDetailData {
//   id?: number;
//   itemName?: any;
//   imageUrl?: any;
//   imageUrl2?: any;
//   priceHole?: any;
//   pricePieace?: any;
//   kcal?: any;
//   code?: string;
//   shopname?: string;
//   discriotion?: string;
//   options?: { name: string; param: any }[];
// }

// 編集画面のトッピング用の配列
export interface editOptions {
  name: string;
  param: any;
}

// Reduxの型の設定　商品一覧
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

// Reduxの型の設定　商品詳細
export interface cakeDetail {
  cakeData?: {
    id?: number;
    itemName?: any;
    imageUrl?: any;
    imageUrl2?: any;
    priceHole?: any;
    pricePieace?: any;
    kcal?: any;
    code?: string;
    discription?: string;
    shopname?: string;
    options?: {
      name: string;
      param: any;
    }[];
  };
  status?: string;
}

// API用：ケーキの商品情報取得
export interface cakeDetailArray {
  cakeData: cakeDetailData;
}

//ケーキの商品情報
export interface cakeDetailData {
  id?: number; //商品ID
  itemName?: any; //商品名
  imageUrl?: any; //画像Url1
  imageUrl2?: any; //画像Url2
  priceHole?: any; //ホール値段
  pricePieace?: any; //ピース値段
  kcal?: any; //カロリー
  code?: string; //商品コード
  shopname?: string; //店名
  discription?: string; //説明
  options?: { name: string; param: any }[]; //設定できるトッピング
}

// API用：ケーキの商品情報取得
export interface cartDataArray {
  data?: cartData[]; //カートのデータ配列
  count?: number; //カート数
  status: string;
}

// カート用のデータ
export interface cartData {
  cartId?: number; //カートID
  itemId?: number; //商品ID
  itemName?: any; //商品名
  imageUrl?: any; //画像Url１
  imageUrl2?: any; //画像Url２
  price?: number; //価格
  peaceCount?: number; //ピース数
  priceHole?: number; //ホール値段
  pricePieace?: number; //ピース値段
  code?: string; //アイテムコード
  discription?: string; //説明
  options?: { name: string; param: number; count: number }[]; //トッピング
}

// お知らせ情報
export interface infoDataArray {
  date: string; //日付（後でDateになおす）
  title: string; //タイトル
  message: string; //メッセージ
  type: string; //お知らせのタイプ
}
