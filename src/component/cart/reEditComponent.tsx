// 再編集用のコンポーネント
import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image'; //Imageコンポーネント
import { useSelector, useDispatch } from 'react-redux'; //Redux,useSelectorとdispatchの読み込み
import { AppDispatch } from '../../store'; //方で怒られるので入れた
import { cartDataArray, cartData } from '../../types';

// ToDo カート画面の一番上のこんぽから読み込む
// 編集中Idを作って、そこから該当のカートデータを渡す
//
//

// ToDo 編集コンポから機能をコピってくる
//
//

// ToDo ケーキ単体Xピース数,ホールの値段の値をカート側に追加しておく
//
//

interface Props {
  propsCartData: cartData; //カートデータ
}

const ReEditComponent = ({ propsCartData }: Props) => {
  const price = propsCartData.price || 0;
  const peaceCount = propsCartData.peaceCount || 0;
  const pricePieace = propsCartData.pricePieace || 0;
  const priceHole = propsCartData.priceHole || 0;
  const cartId = propsCartData.cartId;
  const options = propsCartData.options || [];
  const iteName = propsCartData.itemName || '??';
  const imageUrl1 = propsCartData.imageUrl || '??';
  const imageUrl2 = propsCartData.imageUrl2 || '??';

  const [newPeaceCount, setNewPeaceCount] = useState(peaceCount);
  //   const [optionArray, updateOption] = useState<number[]>(options); //トッピングの個数管理
  //   ２
  // ３
  // 4
  const [witdhOptionPrice, updateOptioPrice] = useState<number>(price);
  const [countOfPeace, updateCountOfPeace] = useState<number>(peaceCount); //ピース数
  const [cakePrice, updateCakePrice] = useState<number>(
    pricePieace * peaceCount
  ); //ケーキの値段(ピース合計)

  // ・・・・・・・・・・・・・・・・・・・・
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
  // ・・・・・・・・・・・・・・・・・・・・

  // ..................
  // トッピングの更新用の関数
  const upDateArray = (index: number, val: number) => {
    // ０よりは小さくしない
    if (val < 0 && options[index].count == 0) {
      return;
    }

    //インデックスを指定して更新配列を更新
    const newArray = options.map((it, it_index) => {
      return it_index == index
        ? { name: it.name, param: it.param, count: it.count + val }
        : it;
    });

    // stateで更新実施
    // updateOption(newArray);  書き換え！！！
  };
  // ..............]

  //   ・・・・・・・・・・・・・・・・・・＝＞編集したデータを更新するDispatchを用意して実行する
  //カートへの追加実行の関数
  const addCartFunction = () => {
    // optionArrayと引数のトッピング情報などからデータを作ってプッシュする

    // カートのトッピング配列を使用するので不要な認識↓
    // const optionsData = options?.map((it, index) => {
    //   const result = {
    //     name: it.name,
    //     param: it.param,
    //     count: optionArray[index],
    //   };

    //   return result;
    // });

    const pushData = {
      data: {
        price: witdhOptionPrice,
        itemName: iteName,
        imageUrl: imageUrl1,
        imageUrl2: imageUrl2,
        // price?: number;
        peaceCount: countOfPeace,

        // code?: string;
        // discription?: string;
        options: options,
      },
    };

    // ここでDispatch実行と編集モーダルとじる機能実装

    // console.log('dispatch addCart!!');

    // dispatch(addCart(pushData)); //dispatch カートへ追加
    // visibleAddedFunction(); //カート追加画面表示

    // chyangeAddFlg(true);
  };
  // ・・・・・・・・・・・・・・・・・・・・・・・

  //   ////////
  //   // ピース数を変化させた時の変効用関数
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
        updateCakePrice(pricePieace); //State更新
      }

      return;
    }

    const updateNumber = n == 8 ? 8 : countOfPeace + n; //新しいピース数
    const updatePrice = n == 8 ? priceHole : pricePieace * updateNumber; //新しい値段
    updateCountOfPeace(updateNumber); //State更新
    updateCakePrice(updatePrice); //State更新
  };
  // ////////////////
  //   ・・・・・・・・・・・・・・・・・・・・・・
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
  // ・・・・・・・・・・・・・・・・・・・・・・・

  //   ////////////////
  //    // オプション用のボタンコンポーネント
  const optionComponent = (index: number, addPrice: number) => {
    const n = options[index].count; //現在のトッピング数
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
  // ///////////////////

  //   ・・・・・・・・・・・・・・・・・・・・・・・・・・
  //    // オプションボタンコンポーネントをオプションの配列分作成する
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
  // ・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・

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
        <MenuButton onClick={() => {}}>止める</MenuButton>
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
        {beforePrice(price)}
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

  // 編集用のボタンコンポ
  //
  //

  // 更新用のuseState
  //
  //

  const result = (
    <>
      <p> hennsyuutyuu///</p>
    </>
  );

  return result;
};

export default ReEditComponent;
