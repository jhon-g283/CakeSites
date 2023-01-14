import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../src/component/header/header";
import Main from "../src/component/main/cakepagelayout";

// ToDo読み込み・レンダー前の処理　ServerSide PropsとかuseEffect
//
//

// ToDo 階層を専用の階層へ移動させる
//
//

const Home: NextPage = () => {
  return (
    // head meta情報などをこっちに入れる
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* main コンポーネントから読み取り */}
      <main className={styles.main}>
        <Main />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
