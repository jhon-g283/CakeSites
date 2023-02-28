// カートへ追加ずみの画面
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image'; //Imageコンポーネント
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

  const AddedItemWraper = styled.div`
    top: 5%;
    left: 10%;
    right: 10%;
    bottom: 5%;
    padding: 0px;
    background-color: white;
    position: fixed;
    z-index: 1020;
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 3px solid #707070;
    border-radius: 20px;
    opacity: 1;
  `;

  return (
    <>
      <AddedItemWraper>
        <Image
          src="/img/test.png"
          width={392}
          height={351}
          alt="My avatar"
        ></Image>
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
        <button
          onClick={() => {
            console.log('go to cart page');
            clickFnction('cart');
          }}
        >
          カートへ
        </button>
      </AddedItemWraper>
    </>
  );
};

export default AddedItem;
