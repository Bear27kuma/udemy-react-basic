import React from 'react';

const inputArea = {
  display: 'flex',
  alignItems: 'center',
  height: '5rem',
  backgroundColor: '#c1ffff'
};

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <div className="input-area" style={inputArea}>
      <input disabled={disabled} placeholder="TODOを入力" value={todoText} onChange={onChange} />
      <button disabled={disabled} onClick={onClick}>追加</button>
    </div>
  );
};
