import React from 'react';
import styled from 'styled-components';
import CartImagePath from '../../../public/img/cart.png';
import { useSelector } from 'react-redux'; //Redux,useSelectorとdispatchの読み込み
import { cartDataArray } from '../../types';

//Props 引数の型
interface Props {
  changePageFunc: (mode: string) => void; // ()=>void
}

const Header = ({ changePageFunc }: Props) => {
  const cartCount = useSelector((state: { cartreducer: cartDataArray }) =>
    state.cartreducer?.count ? state.cartreducer.count : 0
  ); //商品リスト取得
  // styled-componentsの変数は大文字スタート

  // ヘッダー全体
  const Header = styled.header`
    // position: fixed;
    top: 0px;
    left: 0px;
    width: 1336px;
    height: 151px;
    background: #dec192 0% 0% no-repeat padding-box;
    opacity: 1;
  `;

  // タイトルロゴ
  const TitleLogo = styled.a`
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
    // position: absolute;

    // top: 69px;
    // left: 728px;
    margin-right: 30px;
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
    // position: absolute;
    // top: 69px;
    // left: 925px;
    margin-right: 30px;
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

  // propsを使ってないが使えば画像のパスで使い回しができる
  const ImgCart = styled.button`
    // position: relative;
    // top: 30px;
    // left: 1110px;
    width: 108px;
    height: 98px;
    margin: 30px;
    background-image: url(${CartImagePath.src});
    background-color: rgba(0, 0, 0, 0);
    border-radius: 35px;
    opacity: 1;
  `;

  // 左のメニュー群
  const Left = styled.div`
    float: right;
  `;

  // console.log("CartImagePath");
  // console.log(CartImagePath);
  // console.log(ImgCart);

  const headerMenu = (
    <>
      <Header>
        {/* <StyledLink>Peace Of Cake</StyledLink> */}
        <TitleLogo>Peace Of Cake</TitleLogo>

        <Left>
          <Nav1 onClick={() => changePageFunc('info')}>お知らせ</Nav1>
          <Nav2>ヘルプ</Nav2>
          <ImgCart onClick={() => changePageFunc('cart')}> </ImgCart>
          <a>{cartCount}</a>
        </Left>
      </Header>
    </>
  );

  return headerMenu;
};

export default Header;
