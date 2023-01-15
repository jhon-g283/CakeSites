// 商品詳細画面のコンポーネント
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image"; //Imageコンポーネント
import Cake1 from "../../../public/img/cake1.png";
import Cake2 from "../../../public/img/cake2.png";
// ToDo idを引数などから取得しデータを取得する機能
//
//

// ToDoコンポーネントに必要になる画像のパスや商品データの取得機能
// 引数か通信で取得か
//

// ToDo　カートへの登録機能
// Reduxを使用
//

// Todo
// 別ファイルにコンポーネントとして作り直す
//
// 編集コンポーネント
const EditComponent = () => {
  //   const [ingnmber, changeimgnumber] = useState(1);

  const NameText = styled.p``;

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

  const EditButton = (
    <>
      <EditButtonWrapper>
        <MenuButton>Edit</MenuButton>
      </EditButtonWrapper>
    </>
  );

  const LeftPanelWrapper = styled.div``;
  const RightPanelWrapper = styled.div``;
  const PanelWrapper = styled.div`
    display: flex;
    //     top: 1170px;
    // left: 66px;
    // width: 1240px;
    // height: 515px;
    background: #ffffff 0% 0% no-repeat padding-box;
    border-radius: 62px;
    opacity: 1;
  `;

  const LeftPanelSingle = (
    <LeftPanelWrapper>
      <Image
        src="/img/test.png"
        width={448}
        height={260}
        alt="My avatar"
      ></Image>
    </LeftPanelWrapper>
  );

  const RightPanelSingle = (
    <RightPanelWrapper>
      <NameText>1 Peace 200¥</NameText>
      {EditButton}
      {EditButton}
    </RightPanelWrapper>
  );

  const sinlePeace = (
    <>
      <PanelWrapper>
        {LeftPanelSingle}
        {RightPanelSingle}
      </PanelWrapper>
    </>
  );

  const editArea = <>{sinlePeace}</>;

  return editArea;
};

// Todo
// 別ファイルにコンポーネントとして作り直す
//

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

// 商品詳細のメイン部分
const ItemDetailComponent = () => {
  const [ingnmber, changeimgnumber] = useState(1); //ピース数
  const DetailAreaDiv = styled.div`
    background: #eac0c0 0% 0% no-repeat padding-box;
    border: 1px solid #707070;
    opacity: 1;
    display: flex;
  `; //エリア全体調整用
  const DetailImageDiv = styled.div``; //画像の部分調整用
  const Prise = styled.p``; //値段
  const PrisePeace = styled.p``; //ピースの値段
  const PriseHole = styled.p``; //ホールの値段
  const ShopName = styled.p``; //ショップ名
  const Exprein = styled.p``; //説明文

  const TextArea = styled.div`
    padding-left: 50px;
  `;
  //説明エリア
  const ExpreinDiv = styled.div`
    background: #ffffff;
  `;

  const OptionDiv = styled.div``; //オプション
  const OptionList = styled.p``; //オプション

  // アイコンと値段を並べる用
  const FlexBlock = styled.div`
    display: flex;
  `;

  const GridBlock = styled.div`
    display: flex;
  `;

  const ImageDiv = styled.div`
    // display: block;
    margin-left: 0px;
    padding-left: 0px;

    // display: flex;
    // flex-flow: column;
    // justify-content: space-around;
  `;

  const imageArea = (
    <>
      {/* ここを縦にする */}
      <ImageDiv>
        <DetailImageDiv>
          <div>
            <Image
              src="/img/test.png"
              width={392}
              height={351}
              alt="My avatar"
            ></Image>
          </div>

          <div>
            <Image
              src="/img/test.png"
              width={392}
              height={195}
              alt="My avatar"
            ></Image>
          </div>
        </DetailImageDiv>
      </ImageDiv>
    </>
  );

  const expreinArea = (
    <>
      <TextArea>
        <Prise>値段</Prise>
        <FlexBlock>
          <Image src={Cake1.src} width={23} height={23} alt="My avatar"></Image>
          <PrisePeace>Peace:200¥</PrisePeace>
        </FlexBlock>
        <FlexBlock>
          <Image src={Cake2.src} width={23} height={23} alt="My avatar"></Image>
          <PriseHole>Hole:200¥</PriseHole>
        </FlexBlock>
        <ShopName>Cake Tokyo</ShopName>
        <ExpreinDiv>
          <Exprein>eeeeeeeeeeeeeeeeeeeeeeeeee</Exprein>

          <p>-----------------------------</p>
          <OptionDiv>
            <Exprein>Option menu is </Exprein>
            <OptionList>Option1</OptionList>
            <OptionList>Option1</OptionList>
            <OptionList>Option1</OptionList>
          </OptionDiv>
        </ExpreinDiv>
      </TextArea>
    </>
  );

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

  const EditButton = (
    <>
      <EditButtonWrapper>
        <MenuButton>Edit</MenuButton>
      </EditButtonWrapper>
    </>
  );

  const UnderButtonAreaWrapper = styled.div`
    display: flex;
  `;

  const UnderButtonArea = (
    <>
      <UnderButtonAreaWrapper>
        {EditButton}
        {EditButton}
      </UnderButtonAreaWrapper>
    </>
  );

  const DetailArea = (
    <>
      <DetailAreaDiv>
        {/* <GridBlock> */}
        {imageArea}
        {expreinArea}
        {/* </GridBlock> */}
      </DetailAreaDiv>
      {EditComponent()}
      {EditModeComponent()}

      {UnderButtonArea}
    </>
  );

  return DetailArea;
};

export default ItemDetailComponent;
