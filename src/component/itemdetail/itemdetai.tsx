// 商品詳細画面のコンポーネント
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image"; //Imageコンポーネント
import Cake1 from "../../../public/img/cake1.png";
import Cake2 from "../../../public/img/cake2.png";
import EditModeComponent from "./editModeComponent";
import EditComponent from "./editComponent";
import { cakeDetail, cakeDetailData } from "../../types";
import { useSelector, useDispatch } from "react-redux"; //Redux,useSelectorとdispatchの読み込み
import { fetchDetails } from "../../api/getItemDetail";
import { AppDispatch } from "../../store"; //方で怒られるので入れた
// ToDo idを引数などから取得しデータを取得する機能
//
//

// ToDoコンポーネントに必要になる画像のパスや商品データの取得機能
// 引数か通信で取得か
//

// ToDo　カートへの登録機能
// Reduxを使用
//

//Props 引数の型
interface Props {
  cakeData: cakeDetailData;
  clickFnction: (mode: string) => void; // ()=>void
}

//To Do
// 引数が入らなくなったので削除
//

// 商品詳細のメイン部分
const ItemDetailComponent = ({ cakeData, clickFnction }: Props) => {
  // const dispatch = useDispatch<AppDispatch>(); //dispatch設定
  const itemDetail = useSelector(
    (state: { detailreducer: cakeDetail }) => state.detailreducer.cakeData
  );
  console.log("data");

  const [ingnmber, changeimgnumber] = useState(0); //ピース数

  const pPrice = itemDetail?.pricePieace || "???";
  const hPrice = itemDetail?.priceHole || "???";
  const cakeName = itemDetail?.itemName || "???";

  useEffect(() => {
    console.log("change! detail");
    console.log(itemDetail);
    console.log(itemDetail?.id);

    console.log("hoaaaa");
  }, [itemDetail]);

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
        <p>{cakeName}</p>
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

  console.log("imageArea");
  console.log(cakeData.id);

  const expreinArea = (
    <>
      <TextArea>
        <Prise>値段</Prise>
        <FlexBlock>
          <Image src={Cake1.src} width={23} height={23} alt="My avatar"></Image>
          <PrisePeace>Peace:¥{pPrice}</PrisePeace>
        </FlexBlock>
        <FlexBlock>
          <Image src={Cake2.src} width={23} height={23} alt="My avatar"></Image>
          <PriseHole>Hole:¥{hPrice}</PriseHole>
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

  const CartButtonWrapper = styled.div``;

  const BackButtonWrapper = styled.div``;

  const CartButton = (
    <>
      <CartButtonWrapper>
        <MenuButton>カートへ</MenuButton>
      </CartButtonWrapper>
    </>
  );

  const BackButton = (
    <>
      <BackButtonWrapper>
        <MenuButton onClick={() => clickFnction("main")}>戻る</MenuButton>
      </BackButtonWrapper>
    </>
  );

  const UnderButtonAreaWrapper = styled.div`
    display: flex;
  `;

  const UnderButtonArea = (
    <>
      <UnderButtonAreaWrapper>
        {BackButton}
        {CartButton}
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
