// ケーキの詳細情報の取得用API

import type { NextApiRequest, NextApiResponse } from "next";
import { cakeDetail, cakeDetailArray } from "../../src/types";
import jsonData from "./stbdata/cakeDate.json";

// ToDo
// interfaceを１つにまとめる
//

// ToDo クエリに応じたJsonのフィルター機能
//
//

export default function searchCakesData(
  req: NextApiRequest,
  res: NextApiResponse<cakeDetail>
) {
  console.log("req");
  console.log(req.query);
  console.log("jsonData");
  console.log(jsonData);

  const json: cakeDetailArray = jsonData;

  const init = {
    cakeData: [
      {
        id: "1",
        itemName: "モンブランs",
        imageUrl: "imageUrl",
        imageUrl2: "imageUrl",
        priceHole: "333",
        pricePieace: "222",
        kcal: "kcal",
        code: "1A",
        discription: "",
        shopname: "",
        options: {
          option1: { name: "name1", param: "200" },
          option2: { name: "name2", param: "300" },
          option3: { name: "name3", param: "400" },
        },
      },
    ],
  };

  var set = { cakeData: {} };
  // set.cakeData=(json?.cakeData!=undefined)?json?.cakeData[0]:init
  set.cakeData = init;
  const result = json;
  res.status(200).json(set);
}
