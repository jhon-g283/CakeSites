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

interface Props {
  propsCartData: cartData; //カートデータ
}

const ReEditComponent = ({ propsCartData }: Props) => {
  const prise = propsCartData.price;
  const peaceCount = propsCartData.peaceCount;
  const cartId = propsCartData.cartId;
  const options = propsCartData.options;

  const [newPeaceCount, setNewPeaceCount] = useState(peaceCount);
  //   const [optionArray, updateOption] = useState<number[]>(options); //トッピングの個数管理
  //   ２
  // ３
  // 4

  // ・・・・・・・・・・・・・・・・・・・・
  //   調整ボタンとそのテキスト類のエリア
  const OptionWrapper = styled.div`
    display: flex;
  `;
  const UpButton = styled.button``;
  const DownButton = styled.button``;
  const CountNumber = styled.p``;
  const AddPriceText = styled.p``;
  // ・・・・・・・・・・・・・・・・・・・・

  //   ・・・・・・・・・・・・・・・・・・＝＞編集したデータを更新するDispatchを用意して実行する
  //カートへの追加実行の関数
  //   const addCartFunction = () => {
  //     // optionArrayと引数のトッピング情報などからデータを作ってプッシュする

  //     const optionsData = options?.map((it, index) => {
  //       const result = {
  //         name: it.name,
  //         param: it.param,
  //         count: optionArray[index],
  //       };

  //       return result;
  //     });

  //     const pushData = {
  //       data: {
  //         price: witdhOptionPrice,
  //         itemName: itemInfoName,
  //         imageUrl: propImageUrl1,
  //         imageUr2: propImageUrl2,
  //         // price?: number;
  //         peaceCount: countOfPeace,

  //         // code?: string;
  //         // discription?: string;
  //         options: optionsData,
  //       },
  //     };

  //     console.log('dispatch addCart!!');
  //     dispatch(addCart(pushData)); //dispatch カートへ追加
  //     visibleAddedFunction(); //カート追加画面表示

  //     // chyangeAddFlg(true);
  //   };
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
  //  const optionComponent = (index: number, addPrice: number) => {
  //   const n = optionArray[index]; //現在のトッピング数
  //   const component = (
  //     <>
  //       <OptionWrapper>
  //         <DownButton onClick={() => upDateArray(index, -1)}>-</DownButton>
  //         <CountNumber>{n}</CountNumber>
  //         <UpButton onClick={() => upDateArray(index, 1)}>+</UpButton>
  //         {/* オプション数※パラメータで金額表示 */}
  //         <AddPriceText> +{addPrice * n}</AddPriceText>
  //       </OptionWrapper>
  //     </>
  //   );

  //   return component;
  // };
  // ///////////////////

  //   ・・・・・・・・・・・・・・・・・・・・・・・・・・
  //    // オプションボタンコンポーネントをオプションの配列分作成する
  //  const optionCompoList = options?.map((it, index) => {
  //   // index を取得して更新関数まで渡す
  //   const result = (
  //     <>
  //       <ItemText>{it.name}</ItemText>
  //       {optionComponent(index, it.param)}
  //     </>
  //   );

  //   return result;
  // });
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
