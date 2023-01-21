// 商品詳細画面のコンポーネント
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image"; //Imageコンポーネント
import Cake1 from "../../../public/img/cake1.png";
import Cake2 from "../../../public/img/cake2.png";

// ToDo
// 合計の計算機能を配列を使って実装
//
// 編集モードのコンポーネント
const EditModeComponent = () => {
  // 項目名
  const ItemText = styled.p``;
  const ItemTextWrapper = styled.div``;

  const SubButton = styled.button``;

  //   調整ボタンとそのテキスト類のエリア
  const OptionWrapper = styled.div`
    display: flex;
  `;
  const UpButton = styled.button``;
  const DownButton = styled.button``;
  const CountNumber = styled.p``;
  const AddPriceText = styled.p``;

  // 引数で関数を入れる必要
  const optionComponent = (n: number, addPrice: number) => {
    const component = (
      <>
        <OptionWrapper>
          <DownButton>-</DownButton>
          <CountNumber>{n}</CountNumber>
          <UpButton>+</UpButton>

          <AddPriceText> +{addPrice * n}</AddPriceText>
        </OptionWrapper>
      </>
    );

    return component;
  };

  const MenuButton = styled.button`
    width: 380px;
    height: 84px;
    background: #310202 0% 0% no-repeat padding-box;
    border: 1px solid #707070;
    border-radius: 33px;
    opacity: 1;

    // テキスト部分
    // width: 273px;
    // height: 39px;
    font: var(--unnamed-font-style-normal) normal normal 39px/67px Hiragino Kaku
      Gothic ProN;
    letter-spacing: var(--unnamed-character-spacing-0);
    // text-align: left;
    text-align: center;
    font: normal normal normal 39px/67px Hiragino Kaku Gothic ProN;
    letter-spacing: 0px;
    color: #ffffff;
    // opacity: 1;
  `;

  const EditButtonWrapper = styled.div``;

  const CartButton = (
    <>
      <EditButtonWrapper>
        <MenuButton>Cart</MenuButton>
      </EditButtonWrapper>
    </>
  );

  const QuitButton = (
    <>
      <EditButtonWrapper>
        <MenuButton>Quit</MenuButton>
      </EditButtonWrapper>
    </>
  );

  const LeftPanelWrapper = styled.div``;
  const RightPanelWrapper = styled.div`
    display: block;
  `;
  const PanelWrapper = styled.div`
    display: flex;

    background: #ffffff 0% 0% no-repeat padding-box;
    border-radius: 62px;
  `;

  const PricePanelWrapper = styled.div`
    display: flex;
  `;

  const PriceSubText = styled.p``;

  const PriceLabel = styled.p``;

  const PriceWrapper = styled.div``;

  const beforePrice = () => {
    const component = (
      <>
        <PriceWrapper>
          <PriceSubText>Before</PriceSubText>
          <PriceLabel>¥100</PriceLabel>
        </PriceWrapper>
      </>
    );

    return component;
  };

  const PricePanel = (
    <>
      <PricePanelWrapper>
        {beforePrice()}
        <Image
          src="/img/arrow.png"
          width={48}
          height={42}
          alt="My avatar"
        ></Image>
        {beforePrice()}
      </PricePanelWrapper>
      {QuitButton}
    </>
  );

  const LeftPanel = (
    <LeftPanelWrapper>
      <Image
        src="/img/test.png"
        width={448}
        height={260}
        alt="My avatar"
      ></Image>
      {PricePanel}
    </LeftPanelWrapper>
  );

  const WrapDiv = styled.div`
    display: block;
  `;
  const RightPanel = (
    <>
      <RightPanelWrapper>
        <ItemText>order change</ItemText>
        {optionComponent(0, 0)}
        <ItemText>topping</ItemText>
        <ItemText>test</ItemText>
        {optionComponent(1, 100)}
        <ItemText>tes2</ItemText>
        {optionComponent(2, 200)}
        {CartButton}
      </RightPanelWrapper>
    </>
  );

  const multiPeace = (
    <>
      <PanelWrapper>
        {LeftPanel}
        {RightPanel}
      </PanelWrapper>
    </>
  );

  const editArea = <>{multiPeace}</>;

  return editArea;
};

export default EditModeComponent;
