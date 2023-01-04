import React from "react";
import styled from "styled-components";
import Image from "next/image";

const itemBox = () => {
  // ToDo アイテムコンポーネント作成
  //
  //
  const result = (
    <>
      <Image src="/img/test.png" width={64} height={64} alt="My avatar"></Image>
      <p>モンブラン</p>
      <Image
        src="/img/cake1.png"
        width={64}
        height={64}
        alt="My avatar"
      ></Image>
    </>
  );

  return result;
};

export default itemBox;
