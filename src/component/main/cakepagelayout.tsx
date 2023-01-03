import React from "react";
import styled from "styled-components";
import Header from "../header/header";
import Hero from "../../../public/img/hero.png";

const Main = () => {
  const StyledLink = styled.a`
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

  const ImgHero = styled.div`
    top: 176px;
    left: 48px;
    width: 1240px;
    height: 475px;
    background: transparent url("img/24883663_s.png") 0% 0% no-repeat
      padding-box;
    opacity: 1;
    background-image: url(${Hero.src});
    // background-color: rgba(0, 0, 0, 0);
  `;

  const headerMenu = (
    <>
      <Header />
      {/* <img src="${{ImgHero.src}}"></img> */}
      <ImgHero></ImgHero>
      <StyledLink>Main</StyledLink>
    </>
  );

  return headerMenu;
};

export default Main;
