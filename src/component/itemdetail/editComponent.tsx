// 商品詳細画面のコンポーネント
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image"; //Imageコンポーネント
import Cake1 from "../../../public/img/cake1.png";
import Cake2 from "../../../public/img/cake2.png";

// ToDo　カートへの登録機能
// Reduxを使用
//

// Todo
// 別ファイルにコンポーネントとして作り直す
//

// 編集コンポーネント
const EditComponent = () => {
  //   const [ingnmber, changeimgnumber] = useState(1);

  const NameText = styled.p``;

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

  const EditButton = (
    <>
      <EditButtonWrapper>
        <MenuButton>Edit</MenuButton>
      </EditButtonWrapper>
    </>
  );

  const LeftPanelWrapper = styled.div``;
  const RightPanelWrapper = styled.div``;
  const PanelWrapper = styled.div`
    display: flex;
    //     top: 1170px;
    // left: 66px;
    // width: 1240px;
    // height: 515px;
    background: #ffffff 0% 0% no-repeat padding-box;
    border-radius: 62px;
    opacity: 1;
  `;

  const LeftPanelSingle = (
    <LeftPanelWrapper>
      <Image
        src="/img/test.png"
        width={448}
        height={260}
        alt="My avatar"
      ></Image>
    </LeftPanelWrapper>
  );

  const RightPanelSingle = (
    <RightPanelWrapper>
      <NameText>1 Peace 200¥</NameText>
      {EditButton}
      {EditButton}
    </RightPanelWrapper>
  );

  const sinlePeace = (
    <>
      <PanelWrapper>
        {LeftPanelSingle}
        {RightPanelSingle}
      </PanelWrapper>
    </>
  );

  const editArea = <>{sinlePeace}</>;

  return editArea;
};

export default EditComponent;
