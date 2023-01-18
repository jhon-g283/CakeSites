// ケーキの詳細情報の取得用API

import type { NextApiRequest, NextApiResponse } from "next";
import { cakeDetail } from "../../src/types";
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
  res.status(200).json(jsonData);
}
