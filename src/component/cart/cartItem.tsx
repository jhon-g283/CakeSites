import React from 'react';
import styled from 'styled-components';
import Image from 'next/image'; //Imageコンポーネント
import InPutForm from './inputForm';
import { useSelector, useDispatch } from 'react-redux'; //Redux,useSelectorとdispatchの読み込み
import { AppDispatch } from '../../store'; //方で怒られるので入れた
import { cartData } from '../../types';
import { removeCart } from '../../api/addCartDataSlice'; //カート削除機能
import Cake1 from '../../../public/img/cake1.png';
import gaberge from '../../../public/img/gaberge.png';

// ToDo カートない商品の商品ボックス作成
//
//

// ToDo 削除ボタンでカートから削除＝＞削除のアニメーションかエフェクト実装
//
//

// 編集用のモーダルの実装
//
//

// カート一覧の文字を上のコンポに移動させておく
//
//

// ToDoオプションの有無の判定
//
//

// オプション配列の型を個数（あってもなくてもいい）？で修正しておく
//
//

interface Props {
  propsCartData: cartData;
  propsSetIdFunc: (id: number) => void; //
}

const CartItem = ({ propsCartData, propsSetIdFunc }: Props) => {
  const dispatch = useDispatch<AppDispatch>(); //dispatch設定
  const cartId = propsCartData.cartId || 0; //
  const name = propsCartData.itemName || '??'; //
  const price = propsCartData.price || 0; //
  const peace = propsCartData.peaceCount || 0; //

  const options = propsCartData.options; //

  const ItemWrapper = styled.div`
    display: flex;
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #707070;
    border-radius: 40px;
    opacity: 1;
  `;

  const OrderInfoWapper = styled.div``;

  // オプションの部分の枠
  const OptionlPanel = styled.div`
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #707070;
    border-radius: 25px;
    opacity: 1;
  `;
  const NameArea = styled.div``;

  const Itemtext = styled.p``;

  // トッピング情報
  const optionsList = options?.map((it, index) => {
    const result = (
      <React.Fragment key={'optionsList_key_' + index}>
        <Itemtext>
          {it.name} {it.count}個 計{it.count * it.param}
        </Itemtext>
      </React.Fragment>
    );

    return result;
  });

  // オプションがあるかどうかの判定
  const optionFlg = options?.filter((it) => {
    it.count > 0;
  }).length;

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

  // 編集ボタン
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

  // ボタン用のDiv
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

  // 削除ボタン押下時の関数
  const clickDeletefnc = () => {
    // id取得してそれを元にカートから削除

    dispatch(removeCart(cartId));
  };

  // 削除ボタン
  const ButtonArea = (
    <>
      <ButtonPanelWrapper>
        <DeleteButton onClick={clickDeletefnc}>delete</DeleteButton>
        <Image
          src="/img/garbage.png"
          width={106}
          height={106}
          alt="My avatar"
        ></Image>
      </ButtonPanelWrapper>
    </>
  );

  // カート内の注文情報
  const orderInfo = (
    <>
      <OrderInfoWapper>
        <NameArea>
          <Itemtext>商品名：{name}</Itemtext>
          <Itemtext>値段:¥{price}</Itemtext>
        </NameArea>
        <OptionlPanel>
          <Itemtext>Option:Yes</Itemtext>
          <Itemtext>ピース数:{peace}</Itemtext>
          {optionsList}

          <ReOptionButton onClick={() => propsSetIdFunc(cartId)}>
            ReOption
          </ReOptionButton>
        </OptionlPanel>
      </OrderInfoWapper>
    </>
  );

  const Item = (
    <>
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
    </>
  );

  return Item;
};

export default CartItem;
