import React from 'react';

export const IncompleteTodoList = (props) => {
  const { incompleteTodoList, onClickComplete, onClickDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {incompleteTodoList.map((todo, index) => {
          return (
            // 返却する親タグにkeyを設定する必要がある（再レンダリングのため）
            <li key={todo}>
              <p>{todo}</p>
              <button onClick={() => onClickComplete(index)}>完了</button>
              {/*アロー関数で囲むことで即時に関数が実行されるのを防ぐ（クリックされるまでは実行されない）*/}
              <button onClick={() => onClickDelete(index)}>削除</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
