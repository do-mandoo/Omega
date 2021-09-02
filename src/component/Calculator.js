import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 0;
  margin: 0;
  .container {
    max-width: 400px;
    min-height: 70vh;
    margin: 20px auto;
    background-color: #000;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.01);
  }
  button {
    font-size: 20px;
    font-weight: bold;
    /* border: 1px solid rgba(0, 0, 0, 0.35); */
    border: none;
    margin: 1px;
    cursor: pointer;
    border-radius: 5px;
  }
  .subGrid1 button {
    background-color: #fff;
  }
  .subGrid2 button {
    background-color: orange;
    width: 100px;
  }
  .container,
  .subGrid1,
  .subGrid2 {
    display: grid;
  }
  .container {
    grid-template-areas:
      'total total total total'
      'modif modif modif oper'
      'digit digit digit oper'
      'digit digit digit oper'
      'digit digit digit oper'
      'digit digit digit oper';
    grid-auto-columns: 1fr;
  }
  .showInput {
    grid-area: total;
    display: flex;
    justify-content: flex-end;
    font-size: 32px;
    font-weight: bold;
    align-items: center;
    background-color: #000;
    color: #fff;
    border-radius: 5px;
    padding-right: 20px;
    /* min-height: 75px; */
  }
  .subGrid1 {
    grid-area: modif;
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
  }
  .subGrid2 {
    grid-area: oper;
  }
  .digits {
    grid-area: digit;
    display: flex;
    flex-wrap: wrap;
  }
  .digits button {
    background-color: #a334a3;
    color: #ddd;
    flex: 1 0 26%;
  }
`;

const Calculator = () => {
  const [input, setInput] = useState(0);
  console.log(typeof input, 'typeofInput');
  console.log(input, 'input');
  console.log(input.length, 'inputLength');
  const calcBtns = [];
  [7, 8, 9, 4, 5, 6, 1, 2, 3, '±', 0, '.'].forEach(item => {
    calcBtns.push(
      <button
        key={item}
        value={item}
        onClick={e => {
          setInput(input + e.target.value);
          console.log('asd');
        }}
      >
        {''}
        {item}
      </button>,
    );
  });

  return (
    <Wrapper>
      <div className="container">
        {''}
        <div className="showInput">{input}</div>
        <div className="digits">{calcBtns}</div>
        <div className="subGrid1">
          <button
            onClick={() => {
              if (input.typeof === Number && input.length === undefined) {
                setInput(0);
                console.log('hihi');
              } else if (input.length > 1) {
                setInput(input.substring(0, input.length - 1));
              }
            }}
          >
            Delete
          </button>
          <button
            onClick={e => {
              setInput(0);
              console.log(typeof e.target);
            }}
          >
            AllClear
          </button>
        </div>
        <div className="subGrid2">
          <button>/</button>
          <button>*</button>
          <button>-</button>
          <button>+</button>
          <button>=</button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Calculator;
