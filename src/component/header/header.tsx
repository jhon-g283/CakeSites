import React from "react";
import styled from "styled-components";

const Header = () => {
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

  const headerMenu = (
    <>
      <StyledLink>header</StyledLink>
      <a>home</a>
      <a>what is this homepage?</a>
      <a>shop</a>
      <a>order made</a>
      <a>access</a>
    </>
  );

  return headerMenu;
};

export default Header;
