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

  // 削除ボタンがクリックされた時の挙動
  const onClickDelete = (index) => {
    const newTodoList = [...incompleteTodoList];
    // 指定した要素を削除する
    newTodoList.splice(index, 1);
    setIncompleteTodo(newTodoList);
  };

  // 完了ボタンがクリックされた時の挙動
  const onClickComplete = (index) => {
    const newIncompleteTodoList = [...incompleteTodoList];
    newIncompleteTodoList.splice(index, 1);

    const newCompleteTodoList = [...completeTodoList, incompleteTodoList[index]];
    setIncompleteTodo(newIncompleteTodoList);
    setCompleteTodo(newCompleteTodoList);
  };

  // 戻すボタンをクリックした時の挙動
  const onClickBack = (index) => {
    const newCompleteTodoList = [...completeTodoList];
    newCompleteTodoList.splice(index, 1);

    const newIncompleteTodoList = [...incompleteTodoList, completeTodoList[index]];
    setIncompleteTodo(newIncompleteTodoList);
    setCompleteTodo(newCompleteTodoList);
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
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodoList.map((todo, index) => {
            return (
              <li key={todo}>
                <p>{todo}</p>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
