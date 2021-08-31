import React from 'react';
import styled from 'styled-components';

const TodoItemStyle = styled.li`
  list-style: none;
  /* line-height: 5px; */
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  div {
    margin: 5px 0;
  }
`;

const TodoItem = ({ todo }) => {
  return (
    <TodoItemStyle>
      <div>{todo.message}</div>
      {/* <p>{todo.id}</p> */}
    </TodoItemStyle>
  );
};

export default TodoItem;
