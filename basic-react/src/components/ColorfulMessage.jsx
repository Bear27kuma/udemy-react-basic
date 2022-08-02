import React from 'react';

// 親コンポーネントが更新されると子コンポーネントもレンダリングされる
// 呼び出し側からpropsを引数として受け取る
export const ColorfulMessage = (props) => {
  // 分割代入でコードを簡略化させる
  const { color, children } = props;
  const contentStyle = {
    // JSのオブジェクトでキーとバリューが同じ名前であれば省略することができる
    color,
    // CSSのプロパティもキャメルケースで記述する
    fontSize: '18px'
  };
  return (
    // <p style={contentStyle}>{props.message}</p>
    // childrenプロパティを使用すると、コンポーネントのタグで囲った内容が反映される
    <p style={contentStyle}>{children}</p>
  );
};

// export default ColorfulMessage;
