import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoStyle = styled.ul``;

const Todo = ({ todos }) => {
  return (
    <TodoStyle>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </TodoStyle>
  );
};

export default Todo;
