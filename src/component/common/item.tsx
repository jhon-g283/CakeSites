import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Cake1 from '../../../public/img/cake1.png';
import Cake2 from '../../../public/img/cake2.png';
import { itemData } from '../../types';

// ToDo 引数を1つにまとめる
//
//

// ToDo 画像Urlチェックの機能
//
//

// 引数
// 商品画像URL
// 商品名
// 値段（ホール）
// 値段（ピース）
// カロリー
// ユーザーの評価値★
// 販売店名
// 販売店名のリンク
//

interface Props {
  propsClickFunction: (id: number) => void;
  propsItemData: itemData;
}

const itemBox = ({
  // id,
  // itemName,
  // imageUrl,
  // priceHole,
  // pricePieace,
  // kcal,
  propsItemData,
  propsClickFunction,
}: Props) => {
  // ToDo アイテムコンポーネント作成
  //　　値段のスタイル調整
  //　　星の色変更
  // 外枠の作成
  //
  //

  // ToDo コンポーネント化して引数の設定
  //
  //

  // ToDO 他のタグのスタイル作成
  //
  //

  // ToDo評価タグの計算機能実装
  //
  //

  const id = propsItemData.id;
  const itemName = propsItemData.itemName;
  const imageUrl = propsItemData.imageUrl;
  const priceHole = propsItemData.priceHole;
  const pricePieace = propsItemData.pricePieace;
  const kcal = propsItemData.kcal;

  const dummyUrl: string = '/img/test.png'; // ダミー用のUrl

  // 外枠
  const Box = styled.div`
    // top: 1964px;
    // left: 54px;

    width: 288px;
    height: 456px;
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 3px solid #707070;
    border-radius: 20px;
    opacity: 1;
  `;

  // 画像の調整用
  const ImageBox = styled.div`
    margin: 23px 29px;
  `;

  // テキスト類のまとめ
  const TextGroup = styled.div`
    margin-left: 24px;
    margin-top: 0px;
  `;

  // 商品名
  const ItemNameLabel = styled.p`
    margin: 0px;
    padding: 0px;
    // margin-top: 14px;
    // margin-buttom: 14px;
  `;

  // アイコンと値段を並べるよう
  const FlexBlock = styled.div`
    display: flex;
  `;

  const PriceTag1 = styled.p`
    // background-image: url(${Cake1.src});
    margin-top: 0px;
    // margin-buttom: 14px;

    &::before {
      // content: url(${Cake1.src});
      // padding-top: 100px;
    }
  `;

  const PriceTag2 = styled.p`
    // background-image: url(${Cake1.src});
    margin-top: 0px;
    // margin-buttom: 14px;
    &::before {
      width: 32px;
      height: 32px;
      // content: url(${Cake2.src});

      object-fit: cover; /* この一行を追加するだけ！ */
    }
  `;

  // 店名
  const Shopname = styled.p`
    margin-top: 0px;
    float: right;
  `;

  // 商品用のURL
  const itemImageUrl: string =
    imageUrl.match(/^\/.+([\.png]|[\.jpg]|[\.svg])$/g) != null
      ? imageUrl
      : dummyUrl;

  // 返却するコンポーネント
  const result = (
    <>
      <Box onClick={() => propsClickFunction(id || 99)}>
        {/* 商品画像 */}
        <ImageBox>
          <Image
            src={itemImageUrl}
            width={223}
            height={196}
            alt="My avatar"
          ></Image>
        </ImageBox>

        <TextGroup>
          <ItemNameLabel>{itemName}</ItemNameLabel>
          {/* アイコン１ */}
          <FlexBlock>
            <Image
              src={Cake1.src}
              width={23}
              height={23}
              alt="My avatar"
            ></Image>
            <PriceTag1>200yen</PriceTag1>
          </FlexBlock>

          {/* アイコン２ */}
          <FlexBlock>
            <Image
              src={Cake2.src}
              width={23}
              height={23}
              alt="My avatar"
            ></Image>

            <PriceTag2>1200yen</PriceTag2>
          </FlexBlock>

          <ItemNameLabel>★★★</ItemNameLabel>
          <p>kcal 300~</p>

          <Shopname>shopname</Shopname>
        </TextGroup>
      </Box>
    </>
  );

  return result;
};

export default itemBox;
