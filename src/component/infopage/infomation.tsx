import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux'; //Redux,useSelectorとdispatchの読み込み

// ToDoお知らせをAPIからしゅとくする
//
//

// ToDoタブのクリックでお知らせの切り替え（フィルター的な動きでいいかも）
//
//

//Props 引数の型
interface Props {
  changePageFunc: (mode: string) => void; //モードの切り替え用関数 ()=>void
}

//　お知らせ用の画面のコンポーネント
const InfomationComponent = ({ changePageFunc }: Props) => {
  // あとで取得したデータに変更しておく
  const testdata = [
    {
      date: '2022/12/1',
      title: 'お知らせ１',
      message: 'メッセージの内容を表示する',
      type: '1',
    },
    {
      date: '2022/12/2',
      title: 'お知らせ2',
      message: '22メッセージの内容を表示する',
      type: '2',
    },
  ];

  const [infoType, changeInfoType] = useState<string>('1'); //お知らせのタイプ
  const [infoArray, changeInfoArray] = useState(testdata); //お知らせのタイプ

  useEffect(() => {
    // 現在表示中のお知らせのタイプにフィルター
    const infomationList = testdata?.filter((it) => {
      return it.type == infoType;
    });

    changeInfoArray(infomationList); //State更新

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [infoType]);

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
  //
  //

  const infoList = infoArray?.map((it, index) => {
    const result = (
      <React.Fragment key={'infoList_key_' + index}>
        <DateText>{it.date}</DateText>
        <InfoTitleText>{it.title}</InfoTitleText>
        <MessageText>{it.message}</MessageText>
      </React.Fragment>
    );

    return result;
  });

  const viewList = <InfoDiv>{infoList}</InfoDiv>;

  //   お知らせの内容
  const InfoArea = () => {
    const result = (
      <>
        <InfoDiv>
          {/* ---マップで表示 */}
          {infoList}

          {/* <DateText>2022/12/1</DateText>
          <InfoTitleText>お知らせのタイトルぶん</InfoTitleText>
          <MessageText>メッセージのないよう</MessageText> */}
          {/* ------ */}
        </InfoDiv>
      </>
    );

    return result;
  };

  // 戻るボタン
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
      <p>infoType:{infoType}</p>
      <TabDiv>
        <InfoTab onClick={() => changeInfoType('1')}>*お知らせ</InfoTab>
        <CampainTab onClick={() => changeInfoType('2')}>
          *キャンペーン
        </CampainTab>
      </TabDiv>

      {InfoArea()}
      <BackButton onClick={() => changePageFunc('main')}>戻る</BackButton>
    </>
  );

  return infomation;
};

export default InfomationComponent;
