// ヘルプ画面のコンポーネント
import React from 'react';
import styled from 'styled-components';

//Props 引数の型
interface Props {
  changeFlg: () => void; // ()=>void
}

const HelpModal = ({ changeFlg }: Props) => {
  // 外枠
  const Box = styled.div`
    // top: 1964px;
    // left: 54px;

    //   width: 288px;
    //   height: 456px;
    top: 5%;
    left: 10%;
    right: 10%;
    bottom: 5%;
    padding: 0px;
    background-color: white;
    position: fixed;
    z-index: 1020;
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 3px solid #707070;
    border-radius: 20px;
    opacity: 1;
  `;

  const result = (
    <Box>
      <p>aaaa</p>
      <button onClick={changeFlg}> close x</button>
    </Box>
  );

  return <>{result}</>;
};

export default HelpModal;
