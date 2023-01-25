// 商品詳細画面のコンポーネント
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image'; //Imageコンポーネント
import { editOptions } from '../../types';
import Cake1 from '../../../public/img/cake1.png';
import Cake2 from '../../../public/img/cake2.png';

// ToDo
// 合計の計算機能を配列を使って実装
//

// ToDo
// 調整ボタンのStateの数値を配列を使って実装
// 更新も配列とインデックスを組み合わせて実施する
//

// ToDo
// 触った感じボタンの位置が微妙だからウィンドウのXボタンみたく固定にした方がいいかも。。
//

// ToDo
// カートボタンのStore登録機能実装
//

// ToDo
// 新規作成か、既存の修正でStoreから取るのかの出しわけ
//

//Props 引数の型
interface Props {
  clickFnction: () => void; // ()=>void
  options?: editOptions[];
}

const optionArrayDefault: number[] = [0, 0, 0]; // オプション（トッピング）の数量、インデックスを指定して更新する

// 編集モードのコンポーネント
const EditModeComponent = ({ clickFnction, options }: Props) => {
  const [optionArray, updateOption] = useState<number[]>(optionArrayDefault);

  const upDateArray = (index: number, val: number) => {
    console.log('index:' + index + ' val:' + val);
    console.log(optionArray);
    console.log(optionArray[index]);
    // 引数の時点で＋、ーをかけておいて加算させる（０よりは小さくしない）
    const newVal = optionArray[index] + val;
    //インデックスを指定して更新
    let tmp = optionArray.map((it, it_index) => {
      return it + 1;
    });

    console.log(tmp);

    updateOption(tmp);
  };
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
  const optionComponent = (index: number, addPrice: number) => {
    const n = optionArray[index];
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
        <MenuButton>Cart</MenuButton>
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
    </>
  );

  const editArea = <>{multiPeace}</>;

  return editArea;
};

export default EditModeComponent;
