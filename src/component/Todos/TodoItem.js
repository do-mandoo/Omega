import React from 'react';
import styled from 'styled-components';

const TodoItemStyle = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-around;
  /* line-height: 5px; */
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  margin: 5px 0;
  div {
    /* text-align: left; */
  }
`;

const TodoItem = ({ todo }) => {
  return (
    <TodoItemStyle>
      <input type="checkbox" />
      <div>{todo.message}</div>
      {/* <p>{todo.id}</p> */}
      <button>휴지통</button>
    </TodoItemStyle>
  );
};

export default TodoItem;
