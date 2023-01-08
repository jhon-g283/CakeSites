import React, { useEffect } from "react";
import styled from "styled-components";
import Header from "../header/header";
import Hero from "../../../public/img/hero.png";
import ItemBox from "../common/item";
import { itemData } from "../../types";
import { useSelector, useDispatch } from "react-redux"; //Redux,useSelectorとdispatchの読み込み
import { searchResultOfCake, fetchItems } from "../../api/searchCakeList";
import { AppDispatch } from "../../store";
const Main = () => {
  //To Do ReduxのState読み込み（Selector）
  //
  //
  const dispatch = useDispatch<AppDispatch>();
  const { item } = useSelector(searchResultOfCake);
  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  //ToDo 商品リストの配列が更新されたときに動くように、mapからコンポーネントの配列を作成できるようにする。
  //
  // ・・

  // ToDo　検索条件を作る検索ボックスを作成
  //
  // 。。

  // ToDo 検索時に投げるクエリの作成関数を作る
  // dataなんたらから撮ってくる
  // ・・

  const jsontext = responceData();
  console.log("Connecting...");
  console.log(jsontext);

  // メニューボタン。Propsで画像を変える
  const MenuButton = styled.button``;

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

  // 商品一覧
  const Itemlist = styled.div`
    padding-left: 5%;
    padding-right: 5%;
    // 親としてrelativeで相対的に子が動くようにする
    position: relative;

    // flexとwrapで折り返すようにする
    display: flex;
    flex-wrap: wrap;
  `;

  const testData: Array<itemData> = [
    {
      itemName: "モンブランs",
      imageUrl: "imageUrl",
      priceHole: "priceHole",
      pricePieace: "pricePieace",
      kcal: "kcal",
    },
    {
      itemName: "モンブランa",
      imageUrl: "imageUrl",
      priceHole: "priceHole",
      pricePieace: "pricePieace",
      kcal: "kcal",
    },
  ];

  // 取得したJsonデータから商品コンポーネントのリストを作成
  const arrayItemBox = testData.map((item) => {
    const result = (
      <ItemBox
        itemName={item.itemName}
        imageUrl={item.imageUrl}
        priceHole={item.priceHole}
        pricePieace={item.pricePieace}
        kcal={item.kcal}
      />
    );

    return result;
  });

  const mainBlock = (
    <>
      <Header />
      {/* <img src="${{ImgHero.src}}"></img> */}
      <ImgHero></ImgHero>

      <Itemlist>
        {arrayItemBox}
        {/* <ItemBox
          itemName={testData[0].itemName}
          imageUrl={testData[0].imageUrl}
          priceHole={testData[0].priceHole}
          pricePieace={testData[0].pricePieace}
          kcal={testData[0].kcal}
        /> */}
      </Itemlist>
    </>
  );

  return mainBlock;
};

// APIでデータ取得。この処理はuseEffect&Reduxと組み合わせて取得した方が良いさそう
// APIの取得はRedux、表示はuseSelectorが参照して更新のタイミングでuseEffectでこんぽ作成
const responceData = async () => {
  console.log("fetch!");
  const requestUrl = "http://localhost:3000/api/hello?q=%22qq%22";

  const result = await fetch(requestUrl)
    .then((responce) => {
      // console.log("fetch responce");
      // console.log(responce);
      return responce.json();
    })
    .then((data) => {
      // console.log("fetch data");
      // console.log(data);
      return data;
    })
    .catch(() => {
      return "error";
    });

  return result;
};

export default Main;
