import React, { useRef } from 'react';
import styled from 'styled-components';

const TodoInputStyle = styled.div`
  margin-top: 10px;
  form {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
  }
  input {
    box-sizing: border-box;
    width: 300px;
    border: none;
    font-size: 32px;
    margin-right: 5px;
    border-radius: 10px;
  }
  input:focus {
    /* padding: 8px; */
    /* outline: none; */
  }
  input::-webkit-input-placeholder {
    color: #ccc;
    font-size: 18px;
    padding-left: 20px;
  }
  button {
    padding: 8px 16px;
    border: none;
    background-color: #eee;
    border-radius: 10px;
    color: #000;
    font-weight: 600;
    font-size: 15px;
    cursor: pointer;
  }
`;

const TodoInput = ({ createTodo }) => {
  const todoInput = useRef('');

  const onSubmit = e => {
    e.preventDefault();
    createTodo(todoInput.current.value);
    todoInput.current.value = '';
  };

  return (
    <TodoInputStyle>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          ref={todoInput}
          required
          placeholder="할 일을 입력하세요."
        />
        <button>submit</button>
      </form>
    </TodoInputStyle>
  );
};

export default TodoInput;
