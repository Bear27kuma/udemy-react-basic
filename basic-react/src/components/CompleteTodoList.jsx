import React from 'react';

const completeArea = {
  minHeight: '20rem',
  backgroundColor: '#ffffe0'
};

export const CompleteTodoList = (props) => {
  const { completeTodoList, onClickBack } = props;
  return (
    <div className="complete-area" style={completeArea}>
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
  );
};
