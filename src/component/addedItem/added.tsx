// カートへ追加ずみの画面
import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux'; //Redux,useSelectorとdispatchの読み込み
import { cartDataArray } from '../../types';

//Props 引数の型
interface Props {
  clickFnction: (mode: string) => void; // ()=>void トップページへの切り替え用
}

const AddedItem = ({ clickFnction }: Props) => {
  const cartData = useSelector((state: { cartreducer: cartDataArray }) =>
    state.cartreducer?.data ? state.cartreducer.data : []
  ); //商品リスト取得

  const data = cartData.slice(-1)[0]; //配列の最後尾取得
  const name = data.itemName; //商品名
  const prise = data.price; //価格
  const imageUrl = data.imageUrl; //
  // imageUrl?: any;
  // imageUrl2?: any;
  // price?: number;
  // peaceCount?: number;
  // priceHole?: number;
  // pricePieace?: number;
  // code?: string;
  // discription?: string;
  // options?: { name: string; param: number; count: number }[];

  return (
    <>
      <p>{name}</p>
      <p>{prise}</p>
      <button
        onClick={() => {
          console.log('go to top page');
          clickFnction('main');
        }}
      >
        トップへ
      </button>
    </>
  );
};

export default AddedItem;
