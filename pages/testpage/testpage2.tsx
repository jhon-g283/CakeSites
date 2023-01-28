import type { NextPage } from 'next';
// import styles from '../../styles/Home.module.css';

import ItemBox from '../../src/component/common/item';

// intersection-observer：要素が画面に映ったときにフラグを切り替える機能
// クラスとアニメーションを組み合わせてスライドインやフェードアウトなど色々できそう

// intersection-observer用のインポート
import { useInView } from 'react-intersection-observer';
import React, { ReactNode } from 'react'; //引数でいるっぽい
// 反映するモジュール用のクラスの階層を指定して読み込む必要がある
import styles from '../../styles/testdesigns/fadein.module.css'; //

import stylesCompo from 'styled-components';

const TestCompo: NextPage = () => {
  return (
    <>
      <p>test</p>
      <FadeInCompo></FadeInCompo>
      <p>----------------</p>
    </>
  );
};

interface Props {
  children?: ReactNode;
  animation: string;
  startClass?: string;
  endClass?: string;
  rootMargin?: string;
  triggerOnce?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const AnimationTrigger = ({
  children,
  rootMargin = '100px',
  animation,
  startClass = '',
  endClass = '',
  triggerOnce = false,
  className,
  style,
}: Props) => {
  // 仕組みとしてはHookのいっしゅ。refをつけたDOMを監視する？みたい
  //ref:検知する要素()
  //inView:見えたかどうかの状態　True/False
  const { ref, inView } = useInView({
    rootMargin: rootMargin, // 要素の検知の「余白」を設定
    triggerOnce: triggerOnce, //イベントを１回だけにするか？
  });
  // まず、useInViewに設定を入れてref,inViewを取得（セット）する

  console.log(className);
  console.log(children);
  return (
    <div ref={ref} className={className} style={style}>
      {/* 単にクラスを切り替えているだけ、要素が画面で見える位置までいくとinViewがTrueへ */}
      <div className={inView ? animation : startClass}>
        {/* 引数で囲った子供を上のDivでスタイルの対象にすることでアニメーションを充てる */}
        {children}
      </div>
    </div>
  );
};

const FadeInCompo = () => {
  const classfadeIn = styles.fadeIn; //スタイルから読み込むクラスを設定する必要あり

  return (
    <>
      <div className="App">
        <div
          style={{
            height: '1000px',
            borderBottom: '1px solid #acacac',
          }}
        >
          スクロールしてみてください
        </div>
        <AnimationTrigger
          animation={classfadeIn}
          rootMargin="100px"
          triggerOnce
        >
          <div
            // スタイルを直接指定しているだけ、下に渡している
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              margin: '0 auto',
              height: '300px',
              width: '300px',
              boxShadow: '2px 3px 6px #333',
              background: '#f6f6f6',
            }}
          >
            スクロールするとフェードインされます。
            <br />
            フェードインされます
          </div>
        </AnimationTrigger>
      </div>
    </>
  );

  // return result;
};

export default TestCompo;
