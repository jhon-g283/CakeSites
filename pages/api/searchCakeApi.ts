import type { NextApiRequest, NextApiResponse } from 'next';
import { itemData } from '../../src/types';
import jsonData from './stbdata/sample.json';
// type Data = Array<itemData>;

// ToDo
// interfaceを１つにまとめる
//

// ToDo クエリに応じたJsonのフィルター機能
//
//

interface dataList {
  itemlist: {
    id: number;
    itemName: any;
    imageUrl: any;
    priceHole: any;
    pricePieace: any;
    kcal: any;
    code: string;
  }[];
}

export default function searchCakesData(
  req: NextApiRequest,
  res: NextApiResponse<dataList>
) {
  console.log('req');
  console.log(req.query);
  // console.log('jsonData');
  // console.log(jsonData);

  const queryCode = req.query['code'] || '';

  const requestCode = queryCode.includes('code') ? queryCode : '';
  console.log('queryCode');
  console.log(queryCode);

  var result: dataList = queryCode != '' ? { itemlist: [] } : jsonData;

  const data =
    jsonData.itemlist.length > 0
      ? jsonData.itemlist.map((x) => {
          if (x.code == requestCode) {
            result.itemlist.push(x);
            // return x;
          }
        })
      : [];
  // result.itemlist = jsonData.itemlist!=undefined ? data : [];
  // console.log('result');
  // console.log(result);

  res.status(200).json(result);
}
