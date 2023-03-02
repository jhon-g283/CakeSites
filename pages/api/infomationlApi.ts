// お知らせ情報用のAPI
import type { NextApiRequest, NextApiResponse } from 'next';
import { infomationArray } from '../../src/types';
import jsonData from './stbdata/infomation.json';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<infomationArray>
) {
  console.log('req infomationApi');

  // お知らせデータのjsonをそのまま返却
  res.status(200).json(jsonData);
}
