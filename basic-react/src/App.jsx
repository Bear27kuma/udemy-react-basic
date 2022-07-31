import React, { useEffect, useState } from 'react';
import ColorfulMessage from './components/ColorfulMessage';

// コンポーネント名は必ず先頭を大文字から始める
// 複数単語の命名はパスカルケースで行う（ex. SomeComponent）
const App = () => {
  // stateを使用する（state変数名、stateを更新する関数名）
  const [num, setNum] = useState(0);
  // stateが更新される度にReactが再レンダリングされる（変更差分が更新される）
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  }

  // useEffectを使うことで、最初のみ実行したい処理を記述することができる（関心の分離）
  // 第2引数にセットした変数に変更があった時のみ処理が走る
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
  }, [num]);

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
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br/>
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>( ・∇・)</p>}
    </>
  );
};

// 他のファイルでも使用できるようエクスポートする（コンポーネント化）
export default App;
