import React from 'react';
import styled from 'styled-components';
import Image from 'next/image'; //Imageコンポーネント
import Cake1 from '../../../public/img/cake1.png';
import CartItem from './cartItem';
import InPutForm from './inputForm';
import { useSelector, useDispatch } from 'react-redux'; //Redux,useSelectorとdispatchの読み込み
import { AppDispatch } from '../../store'; //方で怒られるので入れた
import { cartDataArray } from '../../types';
// ToDo Reduxで保持したデータから情報を取得
//
//

// ToDo カートない商品の商品ボックス作成
//
//

//Props 引数の型
interface Props {
  changePageFunc: (mode: string) => void; // ()=>void
}

const CartComponent = ({ changePageFunc }: Props) => {
  const dispatch = useDispatch<AppDispatch>(); //dispatch設定
  const cartData = useSelector((state: { cartreducer: cartDataArray }) =>
    state.cartreducer?.data ? state.cartreducer.data : []
  ); //商品リスト取得

  const GuideText = styled.p``;

  const ConfButton = styled.button`
    width: 446px;
    height: 84px;
    background: #310202 0% 0% no-repeat padding-box;
    border: 1px solid #707070;
    border-radius: 33px;
    opacity: 1;
    // テキスト
    font: var(--unnamed-font-style-normal) normal normal 43px/74px Hiragino Kaku
      Gothic ProN;
    letter-spacing: var(--unnamed-character-spacing-0);
    text-align: left;
    font: normal normal normal 43px/74px Hiragino Kaku Gothic ProN;
    letter-spacing: 0px;
    color: #ffffff;
    opacity: 1;
  `;

  const cartItemList = cartData.map((it) => {
    return (
      <>
        <CartItem />
      </>
    );
  });

  const cartList = (
    <>
      {cartItemList}
      <InPutForm />

      <GuideText>Check Your Order</GuideText>
      <ConfButton>Confirm</ConfButton>
      <button onClick={() => changePageFunc('main')}> 戻る</button>
    </>
  );

  return cartList;
};

export default CartComponent;
