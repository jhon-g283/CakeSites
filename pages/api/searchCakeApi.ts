import type { NextApiRequest, NextApiResponse } from "next";
import { itemData } from "../../src/types";
import jsonData from "./stbdata/sample.json";
// type Data = Array<itemData>;

// ToDo
// interfaceを１つにまとめる
//

// ToDo クエリに応じたJsonのフィルター機能
//
//

interface dataList {
  itemlist?: {
    itemName?: any;
    imageUrl?: any;
    priceHole?: any;
    pricePieace?: any;
    kcal?: any;
  }[];
  status?: string;
}

export default function searchCakesData(
  req: NextApiRequest,
  res: NextApiResponse<dataList>
) {
  console.log("req");
  console.log(req.query);
  console.log("jsonData");
  console.log(jsonData);
  res.status(200).json(jsonData);
}
