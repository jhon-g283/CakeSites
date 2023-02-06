import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../header/header'; //ヘッダーコンポーネント
import Hero from '../../../public/img/hero.png';
import ItemBox from '../common/item'; //商品コンポーネント
import Image from 'next/image'; //Imageコンポーネント
import InfomationComponent from '../infopage/infomation'; //お知らせコンポーネント
import ItemDetailComponent from '../itemdetail/itemdetai';
import CartComponent from '../cart/cart'; //カートコンポーネント
import HelpModal from '../helppage/help'; //
import AddedItem from '../addedItem/added'; //
import { itemData, dataList, cakeDetail, cakeDetailData } from '../../types';
import { useSelector, useDispatch } from 'react-redux'; //Redux,useSelectorとdispatchの読み込み
import { fetchItems } from '../../api/searchCakeSlice';
import { AppDispatch } from '../../store'; //方で怒られるので入れた

import { fetchDetails } from '../../api/getItemDetail';

const Main = () => {
  //Reduxの設定
  const dispatch = useDispatch<AppDispatch>(); //dispatch設定
  const itemlist = useSelector((state: { cakereducer: dataList }) =>
    state.cakereducer?.itemlist ? state.cakereducer.itemlist : []
  ); //商品リスト取得
  const status: string = useSelector((state: { cakereducer: dataList }) =>
    state.cakereducer?.status ? state.cakereducer.status : ''
  ); //ステータス取得

  // ダミー用のデータ
  const dummyData: cakeDetail = {
    cakeData: { id: 99 },
  };

  // セレクタから商品一覧のデータ取得。取得できない場合はダミーをセット
  const itemDetailSelector: cakeDetail = useSelector(
    (state: { detailreducer: cakeDetail }) =>
      state.detailreducer.cakeData != undefined
        ? state.detailreducer
        : dummyData
  );

  const itemDetail =
    itemDetailSelector.cakeData != undefined
      ? itemDetailSelector.cakeData
      : dummyData.cakeData;

  const st: any = useSelector((state: { reducer: any }) => state); //ステータス取得

  // 定数
  const mainMode = 'main';
  const detailMode = 'detail';
  const cartMode = 'cart';
  const infoMode = 'info';

  const [modeStatus, changeModeSttatus] = useState<string>(mainMode); //お知らせ画面の表示切り替え用のフラグ

  const [searchCode, updateCode] = useState<string>(''); //検索に使うコード文字列
  const [queryParam, updateQuery] = useState<string>(''); //検索にクエリパラメータ
  const [helpFlg, changeHelpFlg] = useState<boolean>(false); //ヘルプ画面(モーダル)切り替え用

  //Next モーダルの実装：：：：こいつは詰まることはない。。多分
  const helpModalFnc = () => {
    console.log('helpFlg ' + helpFlg + '=>' + !helpFlg);
    changeHelpFlg(!helpFlg);
  };

  // コード文字列の更新用関数
  const setSearchCode = (code: string) => {
    // 引数の文字列がStateの文字列になければ追加し、あれば削除することで制御
    if (searchCode.indexOf(code) < 0) {
      updateCode(searchCode + code);
    } else {
      updateCode(searchCode.replace(code, ''));
    }
  };

  // お知らせフラグを変更させる関数,戻り値がないのでvoidにする
  const changePageState = (mode: string): void => {
    // changeInfoFlg(flg);
    console.log('mode:' + modeStatus + '=>' + mode);
    changeModeSttatus(mode); //モードを詳細画面にする
  };

  // 詳細画面表示用画面
  const showItemDetail = (id: number) => {
    console.log('get item detail id:' + id);
    dispatch(fetchDetails(id)); //詳細画面のデータ取得のActionをDispatch
    changeModeSttatus(detailMode); //モードを詳細画面にする
  };

  // useEffectでdispatch実行
  useEffect(() => {
    dispatch(fetchItems(''));
    console.log('dispatch! items');
  }, [dispatch]);

  // クエリパラメータに関するStateが更新されたタイミングでクエリ文字列を更新
  useEffect(() => {
    //
    const newQuery = 'code=' + searchCode;
    updateQuery(newQuery);
  }, [searchCode]);

  useEffect(() => {
    console.log('itemlist　usestate');
    console.log(st);
  }, [st]);

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

  console.log('Connecting...' + status);

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

  const MainWrapper = styled.div`
    background: #ffe5d5 0% 0% no-repeat padding-box;
  `;

  const ImgHero = styled.div`
    top: 176px;
    left: 48px;
    width: 1240px;
    height: 475px;
    background: transparent url('img/24883663_s.png') 0% 0% no-repeat
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

  // 取得したJsonデータから商品コンポーネントのリストを作成
  const arrayItemBox = itemlist.map((item, index) => {
    const result = (
      <ItemBox
        id={item.id}
        itemName={item.itemName}
        imageUrl={item.imageUrl}
        priceHole={item.priceHole}
        pricePieace={item.pricePieace}
        kcal={item.kcal}
        clickFunction={showItemDetail}
        key={'key_itembox_' + item.id + '_' + index}
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
  const searchBtn = (btnImageUrl: string, name: string, code: string) => {
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

    const BtnComponent = (
      <>
        <BtnDiv>
          <Image
            src={btnImageUrl}
            width={113}
            height={82}
            alt="My avatar"
            onClick={() => setSearchCode(code)}
          ></Image>
          <BtnName>
            {name}
            {code}
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

  // 検索実行関数
  const searchFunction = () => {
    console.log('queryParam:' + queryParam);

    dispatch(fetchItems(queryParam));
  };

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
          <p>search panel {searchCode}</p>
          <BtnList>
            {searchBtn('/img/cupcake.png', 'カップ', 'A')}
            {searchBtn('/img/cupcake.png', 'ss', 'B')}
            {searchBtn('/img/cupcake.png', 'ss', 'B')}
            {searchBtn('/img/cupcake.png', 'ss', 'B')}
            {searchBtn('/img/cupcake.png', 'ss', 'B')}
            {searchBtn('/img/cupcake.png', 'ss', 'B')}
            {searchBtn('/img/cupcake.png', 'ss', 'B')}
            {searchBtn('/img/cupcake.png', 'ss', 'B')}
            {searchBtn('/img/cupcake.png', 'ss', 'B')}
            {searchBtn('/img/cupcake.png', 'ss', 'B')}
            {searchBtn('/img/cupcake.png', 'ss', 'B')}
            {searchBtn('/img/cupcake.png', 'ss', 'B')}
          </BtnList>

          {priceArea()}
          {kcalArea()}
          <SearchButton onClick={searchFunction}>探す</SearchButton>
          <CloseButton>X Close</CloseButton>
        </PanelDiv>
      </>
    );

    return result;
  };

  // エラー回避のためコンポで返す
  const SearchAreaCompo = <>{searchPanel()}</>;

  // メイン部分。Stateの状態とSwitch文で画面を切り替える
  const mainBlock = () => {
    switch (modeStatus) {
      case 'main':
        return (
          <>
            <ImgHero></ImgHero>
            {SearchAreaCompo}
            <Itemlist>{arrayItemBox}</Itemlist>
          </>
        );
      case 'info':
        return <InfomationComponent changePageFunc={changePageState} />;
      case 'detail':
        return (
          <ItemDetailComponent
            cakeData={itemDetail || {}}
            changePageFunc={changePageState}
          />
        );
      case 'cart':
        return <CartComponent changePageFunc={changePageState}></CartComponent>;
    }
  };

  const cakePageLayout = (
    <>
      {/* <MainWrapper> */}
      <Header
        changePageFunc={changePageState}
        changeHelpModalFnc={helpModalFnc}
      />
      {helpFlg ? <HelpModal changeFlg={helpModalFnc} /> : <></>}
      {/* <HelpModal></HelpModal> */}
      {mainBlock()}
    </>
  );

  return cakePageLayout;
};

// export testftype;
export default Main;
