import React from "react";
import styled from "styled-components";

//　お知らせ用の画面のコンポーネント
const InfomationComponent = () => {
  const Title = styled.p``;
  const InfoTab = styled.p``;
  const CampainTab = styled.a``;
  const DateText = styled.p``;
  const InfoTitleText = styled.p``;
  const MessageText = styled.p``;
  const InfoDiv = styled.div``;

  //   ToDoお知らせのとキャンペーンによって配列を分けて作成する
  //
  //
  //

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

  const BackButton = styled.button``;

  const infomation = (
    <>
      <Title>お知らせ一覧</Title>
      <InfoTab>お知らせ</InfoTab>
      <CampainTab>キャンペーン</CampainTab>
      {InfoArea()}
      <BackButton>戻る</BackButton>
    </>
  );

  return infomation;
};

export default InfomationComponent;
