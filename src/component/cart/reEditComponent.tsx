// 再編集用のコンポーネント
import React, { useState } from 'react';
import styled from 'styled-components';
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
  const cartId = propsCartData.cartId;
  const options = propsCartData.options || [];

  const [newPeaceCount, setNewPeaceCount] = useState(peaceCount);
  //   const [optionArray, updateOption] = useState<number[]>(options); //トッピングの個数管理
  //   ２
  // ３
  // 4
  const [witdhOptionPrice, updateOptioPrice] = useState<number>(price);
  const [countOfPeace, updateCountOfPeace] = useState<number>(peaceCount); //ピース数
  // const [cakePrice, updateCakePrice] = useState<number>(peacePrice); //ケーキの値段(ピース合計)

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
        // price: witdhOptionPrice,
        // itemName: itemInfoName,
        // imageUrl: propImageUrl1,
        // imageUr2: propImageUrl2,
        // price?: number;
        // peaceCount: countOfPeace,

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

  //   ・・・・・・・・・・・・・・・・・・・・・・
  // ピース数のエリア
  //   const peaceHoleArea = (
  //     <>
  //       <SwitchButtonWrapper>
  //         <SwitchingButton onClick={() => addPeace(0)}>
  //           ピースで注文
  //         </SwitchingButton>
  //         <SwitchingButton onClick={() => addPeace(8)}>
  //           ホールで注文
  //         </SwitchingButton>
  //       </SwitchButtonWrapper>
  //       <PeaceWrapper>
  //         <DownButton onClick={() => addPeace(-1)}>-</DownButton>
  //         <CountNumber>{countOfPeace}</CountNumber>
  //         <UpButton onClick={() => addPeace(1)}>+</UpButton>
  //         {/* オプション数※パラメータで金額表示 */}
  //         <AddPriceText></AddPriceText>
  //       </PeaceWrapper>
  //     </>
  //   );
  // ・・・・・・・・・・・・・・・・・・・・・・・

  //   ////////
  //   // ピース数を変化させた時の変効用関数
  //   const addPeace = (n: number) => {
  //     if (countOfPeace == 1 && n < 0) {
  //       // ０以下にならないようにする

  //       return;
  //     } else if (countOfPeace >= 8 && n > 0) {
  //       // ８以上にならないようにする
  //       return;
  //     } else if (n == 0) {
  //       // ホール（８ピース）の時だけ１ピースに戻す
  //       if (countOfPeace >= 8) {
  //         updateCountOfPeace(1); //State更新
  //         updateCakePrice(peacePrice); //State更新
  //       }

  //       return;
  //     }

  //     const updateNumber = n == 8 ? 8 : countOfPeace + n; //新しいピース数
  //     const updatePrice = n == 8 ? holePrice : peacePrice * updateNumber; //新しい値段
  //     updateCountOfPeace(updateNumber); //State更新
  //     updateCakePrice(updatePrice); //State更新
  //   };
  // ////////////////

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
