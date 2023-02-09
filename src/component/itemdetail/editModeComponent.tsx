// 商品詳細画面のコンポーネント
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux'; //Redux,useSelectorとdispatchの読み込み
import Image from 'next/image'; //Imageコンポーネント
import { editOptions, cartData } from '../../types';
import { addCart } from '../../api/addCartData';
import AddedItem from '../addedItem/added';
import Cake1 from '../../../public/img/cake1.png';
import Cake2 from '../../../public/img/cake2.png';
import { current } from '@reduxjs/toolkit';

// ToDo
// 触った感じボタンの位置が微妙だからウィンドウのXボタンみたく固定にした方がいいかも。。
//

// ToDo
// カートボタンのStore登録機能実装
//

// ToDo
// 新規作成か、既存の修正でStoreから取るのかの出しわけ
//

// ToDo リセットボタンの実装
//
//

// ToDo カート追加後のリセットやページ遷移
//
//

// ToDo 引数で不足してるパラメータをもらう
//
//

// next:引数の設定、、、このエラーの解決面倒

//Props 引数の型
interface Props {
  clickFnction: () => void; // //モードの切り替え用関数　()=>void
  options?: editOptions[]; //トッピング
  peacePrice: number;
  holePrice: number;
  itemInfoName?: string;
  itemInfoShopName?: string;
  visibleAddedFunction: () => void; //カート画面の表示用関数
  propImageUrl1: string;
  propImageUrl2: string;
}

const optionArrayDefault: number[] = [0, 0, 0]; // オプション（トッピング）の数量、インデックスを指定して更新する

// 編集モードのコンポーネント
const EditModeComponent = ({
  clickFnction, //モードの切り替え用
  options, //トッピング
  peacePrice, //ピース値段
  holePrice, //ホール値段
  itemInfoName, //商品名
  itemInfoShopName, //店名
  visibleAddedFunction,
  propImageUrl1, //Url1
  propImageUrl2, //Url2
}: Props) => {
  const [optionArray, updateOption] = useState<number[]>(optionArrayDefault); //トッピングの個数管理
  const [witdhOptionPrice, updateOptioPrice] = useState<number>(peacePrice);
  const [countOfPeace, updateCountOfPeace] = useState<number>(1); //ピース数
  const [cakePrice, updateCakePrice] = useState<number>(peacePrice); //ケーキの値段(ピース合計)
  const [addFlg, chyangeAddFlg] = useState<boolean>(false); //カート追加完了モーダルの表示フラグ

  const dispatch = useDispatch();

  // トッピングの更新用の関数
  const upDateArray = (index: number, val: number) => {
    // ０よりは小さくしない
    if (val < 0 && optionArray[index] == 0) {
      return;
    }

    //インデックスを指定して更新配列を更新
    const newArray = optionArray.map((it, it_index) => {
      return it_index == index ? it + val : it;
    });

    updateOption(newArray);
  };

  // 合計値更新　オプションの配列が更新された際に動く
  useEffect(() => {
    const sum: number =
      options
        ?.map((it, index) => {
          return it.param * optionArray[index];
        })
        .reduce((pre, current) => {
          return pre + current;
        }) || 0;

    const newPrice: number = sum + cakePrice;
    updateOptioPrice(newPrice); //State更新

    console.log('useEffect opptionArray');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [optionArray, cakePrice]);

  // 項目名
  const ItemText = styled.p``;
  const ItemTextWrapper = styled.div``;

  const SwitchingButton = styled.button``;

  const SwitchButtonWrapper = styled.div`
    display: flex;
  `;
  const PeaceWrapper = styled.div`
    display: flex;
  `;
  //   調整ボタンとそのテキスト類のエリア
  const OptionWrapper = styled.div`
    display: flex;
  `;
  const UpButton = styled.button``;
  const DownButton = styled.button``;
  const CountNumber = styled.p``;
  const AddPriceText = styled.p``;

  //
  const addCartFunction = () => {
    // optionArrayと引数のトッピング情報などからデータを作ってプッシュする

    const optionsData = options?.map((it, index) => {
      const result = {
        name: it.name,
        param: it.param,
        count: optionArray[index],
      };

      return result;
    });

    const test: cartData = {
      price: witdhOptionPrice,
      itemName: itemInfoName,
      imageUrl: '',
      imageUr2: '',
      // price?: number;
      peaceCount: countOfPeace,

      // code?: string;
      // discription?: string;
      options: optionsData,
    };
    const pushData = {
      data: {
        price: witdhOptionPrice,
        itemName: itemInfoName,
        imageUrl: propImageUrl1,
        imageUr2: propImageUrl2,
        // price?: number;
        peaceCount: countOfPeace,

        // code?: string;
        // discription?: string;
        options: optionsData,
      },
    };

    console.log('dispatch addCart!!');
    dispatch(addCart(pushData)); //dispatch カートへ追加
    visibleAddedFunction(); //カート追加画面表示

    chyangeAddFlg(true);
    // ここでカート追加用のフラグ（モード）の切り替えと、Propsの引き渡しを行う
    //
    //
    // next ここに追加、、モーダルの方がいいか？？
  };

  // ピース数を変化させた時の変効用関数
  const addPeace = (n: number) => {
    if (countOfPeace == 1 && n < 0) {
      // ０以下にならないようにする

      return;
    } else if (countOfPeace >= 8 && n > 0) {
      // ８以上にならないようにする
      return;
    } else if (n == 0) {
      // ホール（８ピース）の時だけ１ピースに戻す
      if (countOfPeace >= 8) {
        updateCountOfPeace(1); //State更新
        updateCakePrice(peacePrice); //State更新
      }

      return;
    }

    const updateNumber = n == 8 ? 8 : countOfPeace + n; //新しいピース数
    const updatePrice = n == 8 ? holePrice : peacePrice * updateNumber; //新しい値段
    updateCountOfPeace(updateNumber); //State更新
    updateCakePrice(updatePrice); //State更新
  };

  // ピース数のエリア
  const peaceHoleArea = (
    <>
      <SwitchButtonWrapper>
        <SwitchingButton onClick={() => addPeace(0)}>
          ピースで注文
        </SwitchingButton>
        <SwitchingButton onClick={() => addPeace(8)}>
          ホールで注文
        </SwitchingButton>
      </SwitchButtonWrapper>
      <PeaceWrapper>
        <DownButton onClick={() => addPeace(-1)}>-</DownButton>
        <CountNumber>{countOfPeace}</CountNumber>
        <UpButton onClick={() => addPeace(1)}>+</UpButton>
        {/* オプション数※パラメータで金額表示 */}
        <AddPriceText></AddPriceText>
      </PeaceWrapper>
    </>
  );

  // オプション用のボタンコンポーネント
  const optionComponent = (index: number, addPrice: number) => {
    const n = optionArray[index]; //現在のトッピング数
    const component = (
      <>
        <OptionWrapper>
          <DownButton onClick={() => upDateArray(index, -1)}>-</DownButton>
          <CountNumber>{n}</CountNumber>
          <UpButton onClick={() => upDateArray(index, 1)}>+</UpButton>
          {/* オプション数※パラメータで金額表示 */}
          <AddPriceText> +{addPrice * n}</AddPriceText>
        </OptionWrapper>
      </>
    );

    return component;
  };

  const optionCompoList = options?.map((it, index) => {
    // index を取得して更新関数まで渡す
    const result = (
      <>
        <ItemText>{it.name}</ItemText>
        {optionComponent(index, it.param)}
      </>
    );

    return result;
  });

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
        <MenuButton onClick={addCartFunction}>Cartへ追加</MenuButton>
      </EditButtonWrapper>
    </>
  );

  const QuitButton = (
    <>
      <EditButtonWrapper>
        <MenuButton onClick={clickFnction}>止める</MenuButton>
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

  const beforePrice = (price: number) => {
    const component = (
      <>
        <PriceWrapper>
          <PriceSubText>Before</PriceSubText>
          <PriceLabel>¥{price}</PriceLabel>
        </PriceWrapper>
      </>
    );

    return component;
  };

  const afterPrice = (price: number) => {
    const component = (
      <>
        <PriceWrapper>
          <PriceSubText>Before</PriceSubText>
          <PriceLabel>¥{price}</PriceLabel>
        </PriceWrapper>
      </>
    );
    return component;
  };

  const PricePanel = (
    <>
      <PricePanelWrapper>
        {beforePrice(peacePrice)}
        <Image
          src="/img/arrow.png"
          width={48}
          height={42}
          alt="My avatar"
        ></Image>
        {afterPrice(witdhOptionPrice)}
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
        {peaceHoleArea}
        <ItemText>order change</ItemText>
        {optionCompoList}

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
      {/* フラグでモーダル表示 引数で表示管理するようにすること 　後で消しとく*/}
      {/* {addFlg ? <AddedItem></AddedItem> : <></>} */}
    </>
  );

  const editArea = <>{multiPeace}</>;

  return editArea;
};

export default EditModeComponent;
