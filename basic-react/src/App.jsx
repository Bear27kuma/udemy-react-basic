import React from 'react';

// コンポーネント名は必ず先頭を大文字から始める
// 複数単語の命名はパスカルケースで行う（ex. SomeComponent）
const App = () => {
  const onClickButton = () => alert();
  const contentStyle = {
    color: 'blue',
    // CSSのプロパティもキャメルケースで記述する
    fontSize: '18px'
  };
  return (
    // JSX記法は一つのタグで囲んだ内容しかレンダリングできない
    // React.Fragmentで囲うことで不要なHTMLタグをレンダリングしない（<React.Fragment>と<>は同じ意味）
    <>
      {/*styleはJSのオブジェクトとしてセットすることができる*/}
      <h1 style={{ color: 'red' }}>こんにちは!</h1>
      {/*別で定義したオブジェクトをstyleに当てることもできる*/}
      <p style={contentStyle}>お元気ですか？</p>
      {/*JSX記法の場合、HTMLの属性はキャメルケースで記述する*/}
      {/*JSXでは波括弧はJSの記述の意味*/}
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

// 他のファイルでも使用できるようエクスポートする（コンポーネント化）
export default App;
