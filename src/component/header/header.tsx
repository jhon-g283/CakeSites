import React from "react";
import styled from "styled-components";
import CartImagePath from "../../../public/img/cart.png";

interface CartImageProps {
  CartImage?: string;
}
const Header = () => {
  // styled-componentsの変数は大文字スタート

  const TitleName = styled.h1`
    //ここにスタイルを記述
    outline: none;
    text-decoration: none;
    display: inline-block;
    width: 19.5%;
    margin-right: 0.625%;
    text-align: center;
    line-height: 3;
    color: black;
    background: yellow;
    &:hover {
      background: orange;
    }
    &:active {
      background: red;
      color: white;
    }
  `;

  // ヘッダー全体
  const Header = styled.header`
    top: 0px;
    left: 0px;
    width: 1336px;
    height: 30%;
    background: #dec192 0% 0% no-repeat padding-box;
    opacity: 1;
  `;

  // タイトルロゴ
  const TitleLogo = styled.h1`
    top: 2px;
    left: 27px;
    width: 508px;
    height: 89px;
    font: var(--unnamed-font-style-normal) normal normal 63px/89px Arial Black;
    letter-spacing: var(--unnamed-character-spacing-0);
    text-align: left;
    font: normal normal normal 63px/89px Arial Black;
    letter-spacing: 0px;
    color: #ffffff;
    // opacity: 1;
  `;

  const Nav1 = styled.a`
    top: 69px;
    left: 728px;
    width: 156px;
    height: 39px;
    font: var(--unnamed-font-style-normal) normal normal 39px/49px Adobe Clean;
    letter-spacing: var(--unnamed-character-spacing-0);
    text-align: left;
    font: normal normal normal 39px/49px Adobe Clean;
    letter-spacing: 0px;
    color: #343333;
    opacity: 1;
  `;

  const Nav2 = styled.a`
    top: 69px;
    left: 925px;
    width: 117px;
    height: 39px;
    font: var(--unnamed-font-style-normal) normal normal 39px/49px Adobe Clean;
    letter-spacing: var(--unnamed-character-spacing-0);
    text-align: left;
    font: normal normal normal 39px/49px Adobe Clean;
    letter-spacing: 0px;
    color: #343333;
    opacity: 1;
  `;

  const ImgCart = styled.button<CartImageProps>`
    // top: 30px;
    // left: 1110px;
    // width: 108px;
    // height: 98px;

    background-image: url(${(props) => props.CartImage});
    // border-radius: 35px;
    // opacity: 1;
  `;

  // const back = styled.div`
  //   backgraund-color: ;
  // `;

  const headerMenu = (
    <>
      <Header>
        {/* <StyledLink>Peace Of Cake</StyledLink> */}
        <TitleLogo>Peace Of Cake</TitleLogo>
        <Nav1>お知らせ</Nav1>
        <Nav2>ヘルプ</Nav2>
        <nav>
          <li>a</li>
        </nav>
        {/* <ImgCart CartImage={CartImagePath}></ImgCart> */}
      </Header>
    </>
  );

  return headerMenu;
};

export default Header;
