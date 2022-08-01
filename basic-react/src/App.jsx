import React, { useState } from 'react';
import './styles.css';
import { InputTodo } from './components/InputTodo';
import { IncompleteTodoList } from './components/IncompleteTodoList';
import { CompleteTodoList } from './components/CompleteTodoList';

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
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />

      <IncompleteTodoList
        incompleteTodoList={incompleteTodoList}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />

      <CompleteTodoList
        completeTodoList={completeTodoList}
        onClickBack={onClickBack}
      />
    </>
  );
};
