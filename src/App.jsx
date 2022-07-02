import React from "react";
import ColorfulMessage from "./compornents/ColorfulMessage";

const App = () => {
  const onClickBtn = () => {
    alert();
  };

  return (
    <>
      <h1 style={{ color: "red" }}>minoda</h1>
      <ColorfulMessage color="pink">こんにちは</ColorfulMessage>
      <ColorfulMessage color="blue">元気です</ColorfulMessage>
      <button onClick={onClickBtn}>ボタン</button>
    </>
  );
};

export default App;
