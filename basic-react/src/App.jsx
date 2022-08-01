import React, { useState } from 'react';
import './styles.css';

export const App = () => {
  // useStateでstateを宣言
  const [todoText, setTodoText] = useState('');
  const [incompleteTodoList, setIncompleteTodo] = useState(['TODOです', 'TODOみたい']);
  const [completeTodoList, setCompleteTodo] = useState(['TODOでした']);

  // 引数にイベントを取る
  const onChangeTodoText = (event) => setTodoText(event.target.value);

  // 追加ボタンがクリックされた時の挙動
  const onClickAdd = () => {
    if (todoText === '') return;
    const newTodoList = [...incompleteTodoList, todoText];
    setIncompleteTodo(newTodoList);
    setTodoText('');
  };

  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" value={todoText} onChange={onChangeTodoText} />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodoList.map((todo) => {
            return (
              // 返却する親タグにkeyを設定する必要がある（再レンダリングのため）
              <li key={todo}>
                <p>{todo}</p>
                <button>完了</button>
                <button>削除</button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodoList.map((todo) => {
            return (
              <li key={todo}>
                <p>TODOです</p>
                <button>戻す</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
