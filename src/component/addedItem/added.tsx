import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux'; //Redux,useSelectorとdispatchの読み込み
import { cartDataArray } from '../../types';

// ToDo カートのストアから一番新しいデータをとってくる（挙動不安だけどこれが一番手っ取りバやそう）
//
//

const AddedItem = () => {
  const cartData = useSelector((state: { cartreducer: cartDataArray }) =>
    state.cartreducer?.data ? state.cartreducer.data : []
  ); //商品リスト取得

  const data = cartData[0];
  const name = data.itemName;
  const prise = data.price;

  return (
    <>
      <p>{name}</p>
      <p>{prise}</p>
      <button>トップへ</button>
    </>
  );
};

export default AddedItem;
