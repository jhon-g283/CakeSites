import type { NextPage } from 'next';
import React, { useState } from 'react';
import ItemBox from '../../src/component/common/item';
// import { itemData } from '../../types';

// transitionをreactで管理するライブラリ
// 基本はフラグ管理と秒数になる
// 機能やサンプルが色々ありそうでもう少し調べないと分からなさそう
// 要素を画面上から時間で取り除けるのが大きなポイント
// マウント時のアニメーションが難しいときにをこれ使ってアニメーション付きのコンポを実装する時とかは使えそうかもしれない

// transition-group用のインポート
import { Transition } from 'react-transition-group';

// import styles from '../styles/Home.module.css';

// http://localhost:3000/testpage/testpage1

const TestCompo: NextPage = () => {
  const [animate, setAnimate] = useState(false);
  return (
    <>
      <p>test</p>
      <button onClick={() => setAnimate((prev) => !prev)}>
        {animate ? 'falseにする（押して２秒後に要素が消える）' : 'trueにする'}
      </button>
      <Transition in={animate} timeout={2000} unmountOnExit={true}>
        {(state) => {
          return (
            <h1 style={{ backgroundColor: 'red' }}>
              stateが徐々に変化していく＝＞ {state}
            </h1>
          );
        }}
      </Transition>

      <p>----------------</p>
    </>
  );
};

export default TestCompo;
