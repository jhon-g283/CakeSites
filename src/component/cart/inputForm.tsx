import React from "react";
import styled from "styled-components";

const InPutForm = () => {
  const TitleText = styled.p``;

  const InputWrapper = styled.div``;

  const TextLabel = styled.label``;

  const TextBox = styled.input``;

  const InputArea = styled.div``;

  const component = (
    <>
      <TitleText>お届け先</TitleText>
      <TitleText>住所情報</TitleText>
      <InputArea>
        <InputWrapper>
          <TextLabel>郵便番号</TextLabel>
          <TextBox></TextBox>
        </InputWrapper>
        <InputWrapper>
          <TextLabel>住所</TextLabel>
          <TextBox></TextBox>
        </InputWrapper>
        <InputWrapper>
          <TextLabel>氏名</TextLabel>
          <TextBox></TextBox>
        </InputWrapper>
        <InputWrapper>
          <TextLabel>電話番号</TextLabel>
          <TextBox></TextBox>
        </InputWrapper>
        <InputWrapper>
          <TextLabel>メールアドレス</TextLabel>
          <TextBox></TextBox>
        </InputWrapper>
        <InputWrapper>
          <TextLabel>配送希望日・希望時間</TextLabel>
          <TextBox></TextBox>
        </InputWrapper>
      </InputArea>
    </>
  );

  return component;
};

export default InPutForm;
