// typescript型情報の定義ファイル

export interface itemData {
  itemName?: any;
  imageUrl?: any;
  priceHole?: any;
  pricePieace?: any;
  kcal?: any;
}
[];

export interface cakeDetail {
  cakeData?: {
    id?: string;
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
  status?: string;
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
