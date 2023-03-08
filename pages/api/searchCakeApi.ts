import type { NextApiRequest, NextApiResponse } from 'next';
import { type } from 'os';
import { itemData } from '../../src/types';
import jsonData from './stbdata/itemList.json';
// type Data = Array<itemData>;

// ToDo
// interfaceを１つにまとめる
//

// ToDo クエリに応じたJsonのフィルター機能
//
//

interface dataList {
  itemlist: data[];
}

interface data {
  id: number;
  itemName: any;
  imageUrl: any;
  priceHole: any;
  pricePieace: any;
  kcal: any;
  code: string;
}

export default function searchCakesData(
  req: NextApiRequest,
  res: NextApiResponse<dataList>
) {
  console.log('req');
  console.log(req.query);
  // console.log('jsonData');
  // console.log(jsonData);

  // const queryCode:string = req.query['code'] || '' as string;

  const requestCode: string =
    req.query['code'] != undefined && typeof req.query['code'] == 'string'
      ? req.query['code']
      : '';

  // const requestCode = queryCode.includes('code') ? queryCode : '';
  console.log('queryCode');
  console.log(requestCode);

  const d = jsonData.itemlist != undefined ? jsonData.itemlist : [];

  var result: dataList =
    requestCode == ''
      ? jsonData
      : {
          itemlist: jsonData.itemlist.filter((x) => {
            if (x.code.includes(requestCode)) {
              return x;
            }
          }),
        };

  // console.log(result);

  res.status(200).json(result);
}
