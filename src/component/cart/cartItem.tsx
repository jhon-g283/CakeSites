import React from "react";
import styled from "styled-components";
import Image from "next/image"; //Imageコンポーネント
import InPutForm from "./inputForm";
import Cake1 from "../../../public/img/cake1.png";
import gaberge from "../../../public/img/gaberge.png";

// ToDo Reduxで保持したデータから情報を取得
//
//

// ToDo カートない商品の商品ボックス作成
//
//

// ToDo 削除ボタンでカートから削除
//
//

const CartItem = () => {
  const ItemWrapper = styled.div`
    display: flex;
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #707070;
    border-radius: 40px;
    opacity: 1;
  `;

  const OrderInfoWapper = styled.div``;

  const OptionlPanel = styled.div`
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #707070;
    border-radius: 25px;
    opacity: 1;
  `;
  const NameArea = styled.div``;

  const Itemtext = styled.p``;

  const DeleteButton = styled.button`
    background: #202222 0% 0% no-repeat padding-box;
    border: 1px solid #707070;
    border-radius: 16px;
    opacity: 1;
    // text
    font: var(--unnamed-font-style-normal) normal normal 37px/63px Hiragino Kaku
      Gothic ProN;
    letter-spacing: var(--unnamed-character-spacing-0);
    text-align: left;
    font: normal normal normal 37px/63px Hiragino Kaku Gothic ProN;
    letter-spacing: 0px;
    color: #ffffff;
    opacity: 1;
  `;
  const ReOptionButton = styled.button`
    width: 141px;
    height: 48px;
    background: #202222 0% 0% no-repeat padding-box;
    border: 1px solid #707070;
    border-radius: 15px;
    opacity: 1;

    // テキスト
    font: var(--unnamed-font-style-normal) normal normal 20px/34px Hiragino Kaku
      Gothic ProN;
    letter-spacing: var(--unnamed-character-spacing-0);
    text-align: left;
    font: normal normal normal 20px/34px Hiragino Kaku Gothic ProN;
    letter-spacing: 0px;
    color: #ffffff;
    opacity: 1;
  `;
  const ButtonPanelWrapper = styled.div``;

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

  const ButtonArea = (
    <>
      <ButtonPanelWrapper>
        <DeleteButton>delete</DeleteButton>
        <Image
          src="/img/garbage.png"
          width={106}
          height={106}
          alt="My avatar"
        ></Image>
      </ButtonPanelWrapper>
    </>
  );

  const orderInfo = (
    <>
      <OrderInfoWapper>
        <NameArea>
          <Itemtext>name:cake</Itemtext>
          <Itemtext>Price:¥200</Itemtext>
        </NameArea>
        <OptionlPanel>
          <Itemtext>Option:Yes</Itemtext>
          <Itemtext>Peace:1peace</Itemtext>
          <Itemtext>Topping:nuts+2</Itemtext>
          <Itemtext>Size:S</Itemtext>
          <ReOptionButton>ReOption</ReOptionButton>
        </OptionlPanel>
      </OrderInfoWapper>
    </>
  );

  const Item = (
    <>
      <GuideText>Caet Items</GuideText>
      <ItemWrapper>
        <Image
          src="/img/test.png"
          width={294}
          height={272}
          alt="My avatar"
        ></Image>
        {orderInfo}
        {ButtonArea}
      </ItemWrapper>
      <InPutForm />
      <GuideText>Check Your Order</GuideText>
      <ConfButton>Confirm</ConfButton>
    </>
  );

  return Item;
};

export default CartItem;
