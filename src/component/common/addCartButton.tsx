import { useDispatch } from 'react-redux'; //Redux,useSelectorとdispatchの読み込み
// 商品詳細画面のコンポーネント
import React, { useEffect, useState } from 'react';
import { addCart } from '../../api/addCartDataSlice';
import { cartDataArray, cartData } from '../../types';

//ToDo クリック用ボタン作成
//
//

//ToDo ひきすうでデータとモーダル用関数取得
//
//

//Props 引数の型
interface Props {
  data?: cartData;
  propsvisibleAddedFunction: () => void;
}

const AddCartButton = ({ data, propsvisibleAddedFunction }: Props) => {
  console.log('add Cart !!');
  const dispatch = useDispatch();
  const pushData = {
    data: {
      // cartId: cartId,
      // itemName: iteName,
      // imageUrl: imageUrl1,
      // imageUrl2: imageUrl2,
      // price: witdhOptionPrice,
      // peaceCount: countOfPeace,
      // priceHole: priceHole,
      // pricePieace: pricePieace,
      // options: optionArray,
    },
  };

  const addCartFunction = () => {
    dispatch(addCart(pushData));
    propsvisibleAddedFunction(); //カート追加モーダル
  };

  //   cartId?: number; //カートID
  // itemId?: number; //商品ID
  // itemName?: any; //商品名
  // imageUrl?: any; //画像Url１
  // imageUrl2?: any; //画像Url２
  // price?: number; //価格
  // peaceCount?: number; //ピース数
  // priceHole?: number; //ホール値段
  // pricePieace?: number; //ピース値段
  // code?: string; //アイテムコード
  // discription?: string; //説明
  // options?: { name: string; param: number; count: number }[]; //トッピング

  return (
    <>
      <button onClick={() => addCartFunction()}>add!!</button>
    </>
  );
};

export default AddCartButton;
