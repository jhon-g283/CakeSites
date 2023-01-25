// ケーキの詳細情報の取得用API

import type { NextApiRequest, NextApiResponse } from "next";
import { cakeDetail, cakeDetailArray } from "../../src/types";
import jsonData from "./stbdata/cakeDate.json"; //データ用のJson

// ToDo
// interfaceを１つにまとめる
//

export default function searchCakesData(
  req: NextApiRequest,
  res: NextApiResponse<cakeDetailArray>
) {
  console.log("req");
  console.log(req.query);

  const queryId = req.query?.id || 1; //クエリ取得

  const json = jsonData;

  const init = {
    cakeData: {
      id: 1,
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
  };

  var set: cakeDetailArray = { cakeData: {} }; //返却値用の変数

  // クエリパラメータのIDで返却するデータを変更
  json.cakeData.map((item) => {
    if (item.id == queryId) {
      // set.cakeData.id=item.id
      set.cakeData = item;
    }
  });

  const result = json.cakeData[0];

  console.log("set");
  console.log(set);

  // 教訓：レスポンスはRedux側でも見ること
  //　TypeScriptの型定義でもレスポンス取得受信で入ってくるデータの方まではチェックしないみたい
  //　そのせいでインデックス名が二重になってた
  res.status(200).json(set);
}
