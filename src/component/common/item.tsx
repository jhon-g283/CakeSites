import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Cake1 from "../../../public/img/cake1.png";

const itemBox = () => {
  // ToDo アイテムコンポーネント作成
  //
  //

  const Tag1 = styled.a`
    // background-image: url(${Cake1.src});
    &::before {
      content: url(${Cake1.src});
    }
  `;
  const result = (
    <>
      <Image src="/img/test.png" width={64} height={64} alt="My avatar"></Image>
      <p>モンブラン</p>
      {/* <Image
        src="/img/cake1.png"
        width={32}
        height={32}
        alt="My avatar"
      ></Image> */}
      <Tag1>200yen</Tag1>
    </>
  );

  return result;
};

export default itemBox;
