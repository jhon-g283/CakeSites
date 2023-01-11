import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../header/header"; //ヘッダーコンポーネント
import Hero from "../../../public/img/hero.png";
import ItemBox from "../common/item"; //商品コンポーネント
import Image from "next/image"; //Imageコンポーネント
import { itemData } from "../../types";
import { useSelector, useDispatch } from "react-redux"; //Redux,useSelectorとdispatchの読み込み
import { fetchItems, dataList } from "../../api/searchCakeSlice";
import { AppDispatch } from "../../store"; //方で怒られるので入れた

const Main = () => {
  //Reduxの設定
  const dispatch = useDispatch<AppDispatch>(); //dispatch設定
  const itemlist = useSelector((state: { cakereducer: dataList }) =>
    state.cakereducer?.itemlist ? state.cakereducer.itemlist : []
  ); //商品リスト取得
  const status: string = useSelector((state: { cakereducer: dataList }) =>
    state.cakereducer?.status ? state.cakereducer.status : ""
  ); //ステータス取得
  // useEffectでdispatch実行
  useEffect(() => {
    dispatch(fetchItems());
    console.log("dispatch!");
  }, [dispatch]);

  const [flg, changeflg] = useState(false); //お知らせ画面の表示切り替え用のフラグ

  // useEffect(() => {
  //   console.log("status:" + status);
  // }, [status]);

  //ToDo mapからコンポーネントの配列を作成するとき固有のキーを作成する
  //
  // ・・

  // ToDo　検索条件を作る検索ボックスを作成
  //
  // 。。

  // ToDoボタンクリック時の関数（ケーキの種類）作成
  //
  //

  // ToDo 検索時に投げるクエリの作成関数を作る
  // dataなんたらから撮ってくる=>button押下時に保持用の配列を変えればいいかも
  // ・・

  // ToDo検索０件時や失敗した時の処理
  //
  //

  // ToDo お知らせ画面の作成
  //　　useState`をPropsにして渡す？
  //

  // ToDo ヘルプ画面（モーダル）の作成
  //　useState`をPropsにして渡す？
  //

  // ToDo 詳細画面の表示機能実装
  //
  //

  // カート画面の実装
  //
  //

  console.log("Connecting..." + status);

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
  const arrayItemBox = itemlist.map((item) => {
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

  const BtnList = styled.div`
    // 親がrelativeで相対的に子が動くようにする
    position: relative;

    // flexとwrapで折り返すようにする
    display: flex;
    flex-wrap: wrap;
  `;

  // ボタン用コンポーネント
  // 引数
  // 画像Url
  // ボタン名
  // ボタンの押下時の関数に関連する設定値
  const searchBtn = (btnImageUrl: string, name: string, num: number) => {
    // Propsで画像を変更できるようにする
    // const Btn = styled.button``;

    const BtnName = styled.p`
      // margin: auto;
      position: relative;
      // display: block;
      margin-left: auto;
      margin-right: auto;
    `;

    const BtnDiv = styled.div`
      // display: block;
      margin: 10px;
    `;

    // クリック時の関数
    const clickFunction = (n: number) => {
      console.log(n);
    };
    const BtnComponent = (
      <>
        <BtnDiv>
          <Image
            src={btnImageUrl}
            width={113}
            height={82}
            alt="My avatar"
            onClick={() => {
              clickFunction(num);
            }}
          ></Image>
          <BtnName>
            {name}
            {num}
          </BtnName>
        </BtnDiv>
      </>
    );
    return BtnComponent;
  };

  // 値段の入力欄
  const priceArea = () => {
    const TitleText = styled.p``;
    const Text = styled.a``;
    const TextBoxPrice = styled.input``;
    const TextBoxDiv = styled.div`
      display: block;
    `;

    const priceCompo = (
      <>
        <TitleText>今回のご予算</TitleText>

        <TextBoxDiv>
          <TextBoxPrice></TextBoxPrice>
          <Text>まで</Text>
        </TextBoxDiv>
      </>
    );

    return <>{priceCompo}</>;
  };

  // カロリーの入力欄
  const kcalArea = () => {
    const TitleText = styled.p``;
    const Text = styled.a``;
    const TextBoxKcal = styled.input``;

    const TextBoxDiv = styled.div`
      display: block;
    `;

    const Compo = (
      <>
        <TitleText>カロリー</TitleText>

        <TextBoxDiv>
          <TextBoxKcal></TextBoxKcal>
          <Text>異常は避けたい</Text>
        </TextBoxDiv>
      </>
    );

    return <>{Compo}</>;
  };

  // 探すボタン
  const SearchButton = styled.button``;

  // 閉じるボタン
  const CloseButton = styled.p``;

  // 検索パネル
  const searchPanel = () => {
    const PanelDiv = styled.div`
      // top: 1062px;
      // left: 54px;
      // width: 1229px;
      // height: 792px;
      background: #ffffff 0% 0% no-repeat padding-box;
      border: 1px solid #707070;
      border-radius: 37px;
      // opacity: 1;
    `;

    const result = (
      <>
        <PanelDiv>
          <p>search panel</p>
          <BtnList>
            {searchBtn("/img/cupcake.png", "カップ", 1)}
            {searchBtn("/img/cupcake.png", "ss", 1)}
            {searchBtn("/img/cupcake.png", "ss", 1)}
            {searchBtn("/img/cupcake.png", "ss", 1)}
            {searchBtn("/img/cupcake.png", "ss", 1)}
            {searchBtn("/img/cupcake.png", "ss", 1)}
            {searchBtn("/img/cupcake.png", "ss", 1)}
            {searchBtn("/img/cupcake.png", "ss", 1)}
            {searchBtn("/img/cupcake.png", "ss", 1)}
            {searchBtn("/img/cupcake.png", "ss", 1)}
            {searchBtn("/img/cupcake.png", "ss", 1)}
            {searchBtn("/img/cupcake.png", "ss", 1)}
            {searchBtn("/img/cupcake.png", "ss", 1)}
          </BtnList>

          {priceArea()}
          {kcalArea()}
          <SearchButton>探す</SearchButton>
          <CloseButton>X Close</CloseButton>
        </PanelDiv>
      </>
    );

    return result;
  };

  const mainBlock = (
    <>
      <Header />
      {!flg ? "t" : "f"}
      <ImgHero></ImgHero>
      {/* <p>{status}</p> */}
      {searchPanel()}
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
