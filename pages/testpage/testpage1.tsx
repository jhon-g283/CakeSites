import type { NextPage } from 'next';

import ItemBox from '../../src/component/common/item';
// import { itemData } from '../../types';

// Swiperという画面のスライダーのライブラリ
// ライブラリの公式に色々参考がある
// スライド機能は簡単だがクラスとスタイルで画面を調節しないといけないのが難しいところだと思う

// Swipper用のインポート
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styleSW from '../../styles/testdesigns/swiperstyles.module.css'; //スタイルはModule単位で使いたい場合はModuleをファイル名に入れること、そうしないとグローバル扱いしてこんふりする

// import styles from '../styles/Home.module.css';

// http://localhost:3000/testpage/testpage1

const TestCompo: NextPage = () => {
  return (
    <>
      <p>test</p>
      <SwiperComp />
      <p>----------------</p>
    </>
  );
};

const test = {
  id: 1,
};

const SwiperComp = () => {
  const t = styleSW;
  const SW = (
    <>
      <p>Swiper </p>
      <Swiper
        className="mySwiper" //
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          {/* mapでもいけそう */}
          <p>1</p>
          <ItemBox clickFunction={() => {}}></ItemBox>
        </SwiperSlide>
        <SwiperSlide>
          <p>2</p>
          <ItemBox clickFunction={() => {}}></ItemBox>
        </SwiperSlide>
        <SwiperSlide>
          <p>3</p>
          <ItemBox clickFunction={() => {}}></ItemBox>
        </SwiperSlide>
        <SwiperSlide>
          <p>4</p>
          <ItemBox clickFunction={() => {}}></ItemBox>
        </SwiperSlide>
        ...
      </Swiper>
    </>
  );

  return SW;
};

export default TestCompo;
