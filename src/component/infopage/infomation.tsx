import React from "react";
import styled from "styled-components";

//Props 引数の型
interface Props {
  fukflg: (flg: boolean) => void; // ()=>void
}

//　お知らせ用の画面のコンポーネント
const InfomationComponent = ({ fukflg }: Props) => {
  //ページのタイトル部分
  const Title = styled.p`
    //   top: 212px;
    // left: 71px;
    width: 258px;
    height: 43px;
    font: var(--unnamed-font-style-normal) normal normal 43px/74px Hiragino Kaku
      Gothic ProN;
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-000000);
    text-align: left;
    font: normal normal normal 43px/74px Hiragino Kaku Gothic ProN;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
  `;

  // お知らせタブ
  const InfoTab = styled.a`
    // top: 316px;
    // left: 71px;
    // width: 172px;
    height: 43px;
    font: var(--unnamed-font-style-normal) normal normal 43px/74px Hiragino Kaku
      Gothic ProN;
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-000000);
    text-align: left;
    font: normal normal normal 43px/74px Hiragino Kaku Gothic ProN;
    letter-spacing: 0px;
    color: #000000;
  `;

  // キャンペーンタブ
  const CampainTab = styled.a`
    // top: 316px;
    // left: 329px;
    width: 378px;
    height: 43px;
    font: var(--unnamed-font-style-normal) normal normal 43px/74px Hiragino Kaku
      Gothic ProN;
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-000000);
    text-align: left;
    font: normal normal normal 43px/74px Hiragino Kaku Gothic ProN;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
  `;

  // タブ部分
  const TabDiv = styled.div`
    display: flex;
  `;

  // 日付
  const DateText = styled.p`
    //   top: 435px;
    // left: 73px;
    // width: 267px;
    // height: 43px;
    font: var(--unnamed-font-style-normal) normal normal 43px/74px Hiragino Kaku
      Gothic ProN;
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-000000);
    text-align: left;
    font: normal normal normal 43px/74px Hiragino Kaku Gothic ProN;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
  `;

  const InfoTitleText = styled.p`
    //   top: 517px;
    // left: 183px;
    // width: 1027px;
    // height: 43px;
    font: var(--unnamed-font-style-normal) normal normal 43px/74px Hiragino Kaku
      Gothic ProN;
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-000000);
    text-align: left;
    font: normal normal normal 43px/74px Hiragino Kaku Gothic ProN;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
  `;
  const MessageText = styled.p`
    // top: 621px;
    // left: 200px;
    // width: 990px;
    // height: 356px;
    font: var(--unnamed-font-style-normal) normal normal 32px/54px Hiragino Kaku
      Gothic ProN;
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-000000);
    text-align: left;
    font: normal normal normal 32px/54px Hiragino Kaku Gothic ProN;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
  `;
  const InfoDiv = styled.div`
    // top: 385px;
    // left: 43px;
    // width: 1234px;
    // height: 1892px;
    background: #ffffff 0% 0% no-repeat padding-box;
    opacity: 1;
  `;

  //   ToDoお知らせのとキャンペーンによって配列を分けて作成する
  //
  //
  //

  // ToDo データをAPIなどから取得して表示

  //   お知らせの内容
  const InfoArea = () => {
    const result = (
      <>
        <InfoDiv>
          <DateText>2022/12/1</DateText>
          <InfoTitleText>お知らせのタイトルぶん</InfoTitleText>
          <MessageText>メッセージのないよう</MessageText>
        </InfoDiv>
      </>
    );

    return result;
  };

  const BackButton = styled.button`
    // top: 2329px;
    // left: 1018px;
    width: 226px;
    height: 84px;
    background: #310202 0% 0% no-repeat padding-box;
    border: 1px solid #707070;
    border-radius: 33px;
    opacity: ;
    // テキスト部分のスタイル
    font: var(--unnamed-font-style-normal) normal normal 43px/74px Hiragino Kaku
      Gothic ProN;
    letter-spacing: var(--unnamed-character-spacing-0);
    text-align: center;
    font: normal normal normal 43px/74px Hiragino Kaku Gothic ProN;
    letter-spacing: 0px;
    color: #ffffff;
    opacity: 1;
  `;

  const infomation = (
    <>
      <Title>お知らせ一覧</Title>
      <TabDiv>
        <InfoTab>*お知らせ</InfoTab>
        <CampainTab>*キャンペーン</CampainTab>
      </TabDiv>

      {InfoArea()}
      <BackButton onClick={() => fukflg(false)}>戻る</BackButton>
    </>
  );

  return infomation;
};

export default InfomationComponent;
