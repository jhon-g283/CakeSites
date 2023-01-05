import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Cake1 from "../../../public/img/cake1.png";
import Cake2 from "../../../public/img/cake2.png";

const itemBox = () => {
  // ToDo アイテムコンポーネント作成
  // もっっくとしてサンプル作成
  //　　値段のスタイル調整
  //　　星の色変更
  // 外枠の作成
  //
  //

  // ToDo コンポーネント化して引数の設定

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
    margin: 23px 29px 39px;
  `;

  // テキスト類のまとめ
  const TextGroup = styled.div`
    margin-left: 24px;
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
    margin-top: 14px;
    // margin-buttom: 14px;

    &::before {
      content: url(${Cake1.src});
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

  const result = (
    <>
      <Box>
        <ImageBox>
          <Image
            src="/img/test.png"
            width={223}
            height={196}
            alt="My avatar"
          ></Image>
        </ImageBox>

        <TextGroup>
          <ItemNameLabel>モンブラン</ItemNameLabel>
          {/* <Image
        src="/img/cake1.png"
        width={32}
        height={32}
        alt="My avatar"
      ></Image> */}

          <FlexBlock>
            <Image
              src={Cake1.src}
              width={23}
              height={23}
              alt="My avatar"
            ></Image>
            <PriceTag1>200yen</PriceTag1>
          </FlexBlock>

          <FlexBlock>
            <Image
              src="/img/test.png"
              width={23}
              height={23}
              alt="My avatar"
            ></Image>

            <PriceTag2>1200yen</PriceTag2>
          </FlexBlock>

          <ItemNameLabel>★★★</ItemNameLabel>
          <p>kcal 300~</p>
          <p>店の名前</p>
        </TextGroup>
      </Box>
    </>
  );

  return result;
};

export default itemBox;
