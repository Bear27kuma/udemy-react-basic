import React from 'react';
import ColorfulMessage from './components/ColorfulMessage';

// コンポーネント名は必ず先頭を大文字から始める
// 複数単語の命名はパスカルケースで行う（ex. SomeComponent）
const App = () => {
  const onClickButton = () => alert();
  // const contentLadyStyle = {
  //   color: 'pink',
  //   fontSize: '18px'
  // };
  return (
    // JSX記法は一つのタグで囲んだ内容しかレンダリングできない
    // React.Fragmentで囲うことで不要なHTMLタグをレンダリングしない（<React.Fragment>と<>は同じ意味）
    <>
      {/*styleはJSのオブジェクトとしてセットすることができる*/}
      <h1 style={{ color: 'red' }}>こんにちは!</h1>

      {/*別で定義したオブジェクトをstyleに当てることもできる*/}
      {/*<p style={contentStyle}>お元気ですか？</p>*/}

      {/*propsとして値をコンポーネント側に渡す（props名は任意）*/}
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      {/*<p style={contentLadyStyle}>元気です!</p>*/}
      <ColorfulMessage color="pink">元気です!</ColorfulMessage>

      {/*JSX記法の場合、HTMLの属性はキャメルケースで記述する*/}
      {/*JSXでは波括弧はJSの記述の意味*/}
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

// 他のファイルでも使用できるようエクスポートする（コンポーネント化）
export default App;
