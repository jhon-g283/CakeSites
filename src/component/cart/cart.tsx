import React from "react";
import styled from "styled-components";
import Image from "next/image"; //Imageコンポーネント
import Cake1 from "../../../public/img/cake1.png";
import CartItem from "./cartItem";

// ToDo Reduxで保持したデータから情報を取得
//
//

// ToDo カートない商品の商品ボックス作成
//
//

const CartComponent = () => {
  const cartList = (
    <>
      <CartItem />
    </>
  );

  return cartList;
};

export default CartComponent;
