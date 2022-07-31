import React from 'react';

// コンポーネント名は必ず先頭を大文字から始める
// 複数単語の命名はパスカルケースで行う（ex. SomeComponent）
const App = () => {
  return (
    // JSX記法は一つのタグで囲んだ内容しかレンダリングできない
    // React.Fragmentで囲うことで不要なHTMLタグをレンダリングしない（<React.Fragment>と<>は同じ意味）
    <>
      <h1>こんにちは!</h1>
      <p>お元気ですか？</p>
    </>
  );
};

// 他のファイルでも使用できるようエクスポートする（コンポーネント化）
export default App;
