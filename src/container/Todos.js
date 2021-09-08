import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../component/Todos/Header';
import Preloader from '../component/Todos/Preloader';
import Todo from '../component/Todos/Todo';
import TodoInput from '../component/Todos/TodoInput';

const TodosStyle = styled.div`
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  color: #333;
  background-color: lightgreen;
  min-height: 400px;
  .container {
    max-width: 800px;
    border: 1px solid #aaa;
    margin: 0 auto;
  }
`;

const Todos = () => {
  // useState에 기본값을 null로 주면 랜더링이 안된다. (null값만 아니면 될 것 같다. "[{ message: 'hi', id: 5 }]" or "''")
  // functional componenet는 우선 한 번 랜더링이 된 이후에 dependency가 빈 배열인 useEffect가 호출된다.
  const [todos, setTodos] = useState('');

  useEffect(() => {
    const getTodos = async () => {
      const res = await axios.get('http://localhost:5001');
      setTodos(res.data);
    };
    getTodos();
  }, []);

  const createTodo = async text => {
    const res = await axios.post('http://localhost:5001', { message: text });
    setTodos(res.data);
  };

  return (
    <TodosStyle>
      <div className="container">
        <Header />
        <TodoInput createTodo={createTodo} />
        {todos ? <Todo todos={todos} /> : <Preloader />}
      </div>
    </TodosStyle>
  );
};

export default Todos;
