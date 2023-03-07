// 再編集用のコンポーネント
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Image from 'next/image'; //Imageコンポーネント
import { useSelector, useDispatch } from 'react-redux'; //Redux,useSelectorとdispatchの読み込み
import { editCart } from '../../api/addCartDataSlice';
import { AppDispatch } from '../../store'; //方で怒られるので入れた
import { cartDataArray, cartData } from '../../types';

// ToDo ケーキ単体Xピース数,ホールの値段の値をカート側に追加しておく
//
//

interface Props {
  propsCartData: cartData; //カートデータ
  propsCloseModalFnc: (id: number) => void; // モーダルクローズ用の関数
}

const ReEditComponent = ({ propsCartData, propsCloseModalFnc }: Props) => {
  const price = propsCartData.price || 0;
  const peaceCount = propsCartData.peaceCount || 0;
  const pricePieace = propsCartData.pricePieace || 0;
  const priceHole = propsCartData.priceHole || 0;
  const cartId = propsCartData.cartId || 0;
  const options = propsCartData.options || [];
  const iteName = propsCartData.itemName || '??';
  const imageUrl1 = propsCartData.imageUrl || '??';
  const imageUrl2 = propsCartData.imageUrl2 || '??';

  // const [newPeaceCount, setNewPeaceCount] = useState<number>(peaceCount);

  const [optionArray, updateOption] = useState(options); //トッピングの個数管理
  //   ２
  // ３
  // 4
  const [witdhOptionPrice, updateOptioPrice] = useState<number>(price); //オプション含む合計値段
  const [countOfPeace, updateCountOfPeace] = useState<number>(peaceCount); //ピース数
  const [cakePrice, updateCakePrice] = useState<number>(
    pricePieace * peaceCount
  ); //ケーキの値段(ピース合計)

  const dispatch = useDispatch();

  // 合計値更新　オプションの配列が更新された際に動く
  useEffect(() => {
    //トッピングのStateから合計値生成
    const sum: number =
      optionArray
        ?.map((it, index) => {
          return it.param * it.count;
        })
        .reduce((pre, current) => {
          return pre + current;
        }) || 0;

    const newPrice: number = sum + cakePrice;
    updateOptioPrice(newPrice); //State更新

    console.log('useEffect opptionArray');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [optionArray, cakePrice]);

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
    if (val < 0 && optionArray[index].count == 0) {
      return;
    }

    //インデックスを指定して更新配列を更新
    const newArray = optionArray.map((it, it_index) => {
      return it_index == index
        ? { name: it.name, param: it.param, count: it.count + val }
        : it;
    });

    // stateで更新実施
    updateOption(newArray);
  };
  // ..............]

  //   ・・・・・・・・・・・・・・・・・・＝＞編集したデータを更新するDispatchを用意して実行する
  //カートへの追加実行の関数
  const addCartFunction = () => {
    // optionArrayと引数のトッピング情報などからデータを作ってプッシュする

    const pushData = {
      data: {
        cartId: cartId,
        itemName: iteName,
        imageUrl: imageUrl1,
        imageUrl2: imageUrl2,
        price: witdhOptionPrice,
        peaceCount: countOfPeace,
        priceHole: priceHole,
        pricePieace: pricePieace,

        options: optionArray,
      },
    };

    // ここでDispatch実行と編集モーダルとじる機能実装

    console.log('dispatch editCart!!' + cartId);
    // カートIDじゃなくてデータ丸ごと投げる
    dispatch(editCart(pushData));
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
    const n = optionArray[index].count; //現在のトッピング数(Stateから取得)
    const component = (
      <React.Fragment key={'optionCompoList_key_' + index}>
        <OptionWrapper>
          <DownButton onClick={() => upDateArray(index, -1)}>-</DownButton>
          <CountNumber>{n}</CountNumber>
          <UpButton onClick={() => upDateArray(index, 1)}>+</UpButton>
          {/* オプション数※パラメータで金額表示 */}
          <AddPriceText> +{addPrice * n}</AddPriceText>
        </OptionWrapper>
      </React.Fragment>
    );

    return component;
  };
  // ///////////////////

  //   ・・・・・・・・・・・・・・・・・・・・・・・・・・
  //    // オプションボタンコンポーネントをオプションの配列分作成する
  const optionCompoList = optionArray?.map((it, index) => {
    // index を取得して更新関数まで渡す
    const result = (
      <React.Fragment key={'optionCompoList_key_' + index}>
        <ItemText>{it.name}</ItemText>
        {optionComponent(index, it.param)}
      </React.Fragment>
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
      <button onClick={() => propsCloseModalFnc(0)}>Close X</button>
      <PanelWrapper>
        {LeftPanel}
        {RightPanel}
      </PanelWrapper>
      {/* フラグでモーダル表示 引数で表示管理するようにすること 　後で消しとく*/}
      {/* {addFlg ? <AddedItem></AddedItem> : <></>} */}
    </>
  );

  const EditAreaBox = styled.div`
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

  const editArea = (
    <>
      <EditAreaBox>{multiPeace}</EditAreaBox>
    </>
  );

  return editArea;

  // 編集用のボタンコンポ
  //
  //
};

export default ReEditComponent;
