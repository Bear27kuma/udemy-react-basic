import React from 'react';
import ReactDom from 'react-dom';

const App  = () => {
  return (
    // JSX記法は一つのタグで囲んだ内容しかレンダリングできない
    // React.Fragmentで囲うことで不要なHTMLタグをレンダリングしない（<React.Fragment>と<>は同じ意味）
    <>
      <h1>こんにちは!</h1>
      <p>お元気ですか？</p>
    </>
  );
};

ReactDom.render(<App/>, document.getElementById('root'));
