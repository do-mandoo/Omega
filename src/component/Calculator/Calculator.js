import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const ButtonWrap = styled.button`
  color: #000;
  width: 75px;
  height: 58px;
  padding: 0;
  margin: 0;
  font-size: 40px;
  text-align: center;
  border-radius: 12px;
  border: groove;
  box-shadow: 1px 1px 1px 1px grey;
  cursor: pointer;
  :active {
    position: relative;
    top: 2px;
    box-shadow: 1px 0px 0px 0px grey;
  }
  :hover {
    background-color: #aaa;
  }
`;

const CalcValue = props => {
  return (
    <ButtonWrap
      className={`${props.className}`}
      onClick={() => {
        props.onClick(props.keyvalue);
      }}
    >
      {props.keyvalue}
      {''}
    </ButtonWrap>
  );
};

const CalcWrapper = styled.div`
  .container {
    width: 300px;
    height: 350px;
    display: grid;
    /* border: 1px solid red; */
    margin: auto;
    margin-top: 10px;
    /* background-color: lightgray; */
    padding: 10px;
    border: ridge;
  }
  .keyPad {
    display: grid;
    grid-template-columns: repeat(4, 75px);
    grid-template-rows: repeat(5, 58px);
    /* grid-gap: 1px; */
    grid-template-areas:
      'keysFuntion keysFuntion keysFuntion keysOperators'
      'keysNumbers keysNumbers keysNumbers keysOperators'
      'keysNumbers keysNumbers keysNumbers keysOperators'
      'keysNumbers keysNumbers keysNumbers keysOperators'
      'keysNumbers keysNumbers keysNumbers keysOperators';
  }
  .keysFuntion {
    grid-area: keysFuntion;
  }
  .keysFuntion button {
    background-color: lightpink;
  }
  .keysOperators {
    grid-area: keysOperators;
  }
  .keysOperators button {
    background-color: lightskyblue;
  }
  .keysNumbers {
    grid-area: keysNumbers;
    // rtl = right to left 오른쪽에서 왼쪽으로 방향.
    direction: rtl;
  }
  .keysNumbers button {
    background-color: #f5c66f;
  }
  .input {
    text-align: right;
    border: ridge #000;
    padding-right: 10px;
    margin-bottom: 8px;
  }
  .result {
    min-height: 45px;
    font-size: xx-large;
    font-weight: bold;
  }
`;

function Calculator() {
  const [prevValue, setPrevValue] = useState(null); // null
  const [nextValue, setNextValue] = useState('0');
  const [operator, setOperator] = useState(null); // null

  useEffect(() => {}, [prevValue, nextValue, operator]);

  const CalcOperator = {
    // key : value(함수식)
    '+': (firstValue, secondValue) => firstValue + secondValue,
    '-': (firstValue, secondValue) => firstValue - secondValue,
    '*': (firstValue, secondValue) => firstValue * secondValue,
    '/': (firstValue, secondValue) => firstValue / secondValue,
    '=': (firstValue, secondValue) => secondValue,
  };

  const performOperation = () => {
    let temp = CalcOperator[operator](
      // parseFloat() 함수는 문자열을 분석해서 부동소수점 실수로 반환한다. 분석할 수 없으면 NaN을 반환한다.
      parseFloat(prevValue),
      parseFloat(nextValue),
    );
    setOperator(null);
    setNextValue(String(temp));
    setPrevValue(null);
  };

  const handleNum = number => {
    setNextValue(nextValue === '0' ? String(number) : nextValue + number);
  };

  const insertDot = () => {
    // RegExp.prototype.test() 메서드는
    // 주어진 문자열이 정규 표현식을 만족하는지 판별하고,
    // 그 여부를 true, false로 반환한다.
    if (!/\./.test(nextValue)) {
      setNextValue(nextValue + '.');
    }
  };

  const percent = () => {
    setNextValue(parseFloat(nextValue) / 100);
    if (prevValue && nextValue === '') {
      setPrevValue(parseFloat(prevValue) / 100);
    }
  };

  const plusMinus = () => {
    setNextValue(parseFloat(nextValue) * -1);
  };

  const clearData = () => {
    setNextValue('0');
    setPrevValue(0);
  };

  const deleteData = () => {
    setNextValue(nextValue.substring(0, nextValue.length - 1));
  };

  const handleOperation = value => {
    // Number.isInteger() 메서드는 주어진 값이 정수인지 판별한다.
    if (Number.isInteger(value)) {
      console.log(1);
      // parseInt 10진수
      handleNum(parseInt(value, 10));
    } else if (value in CalcOperator) {
      console.log(2);
      if (operator === null) {
        console.log(3);
        setOperator(value);
        setPrevValue(nextValue);
        setNextValue('');
      }
      if (operator) {
        console.log(4);
        console.log(operator, 'operator 4');
        setOperator(value);
      }
      if (prevValue && operator && nextValue) {
        console.log(5);
        performOperation();
      }
    }
  };

  return (
    <CalcWrapper>
      <div className="container">
        <div className="input">
          <div className="result">{nextValue}</div>
        </div>
        <div className="keyPad">
          <div className="keysFuntion">
            <CalcValue keyvalue={'C'} onClick={clearData} />
            <CalcValue keyvalue={'D'} onClick={deleteData} />

            <CalcValue keyvalue={'%'} onClick={percent} />
          </div>
          <div className="keysOperators">
            <CalcValue keyvalue={'+'} onClick={handleOperation} />
            <CalcValue keyvalue={'-'} onClick={handleOperation} />
            <CalcValue keyvalue={'*'} onClick={handleOperation} />
            <CalcValue keyvalue={'/'} onClick={handleOperation} />
            <CalcValue keyvalue={'='} onClick={handleOperation} />
          </div>
          <div className="keysNumbers">
            <CalcValue keyvalue={9} onClick={handleOperation} />
            <CalcValue keyvalue={8} onClick={handleOperation} />
            <CalcValue keyvalue={7} onClick={handleOperation} />
            <CalcValue keyvalue={6} onClick={handleOperation} />
            <CalcValue keyvalue={5} onClick={handleOperation} />
            <CalcValue keyvalue={4} onClick={handleOperation} />
            <CalcValue keyvalue={3} onClick={handleOperation} />
            <CalcValue keyvalue={2} onClick={handleOperation} />
            <CalcValue keyvalue={1} onClick={handleOperation} />
            <CalcValue
              keyvalue={'.'}
              className="keyNumDot"
              onClick={insertDot}
            />
            <CalcValue
              keyvalue={0}
              className="keyZero"
              onClick={handleOperation}
            />
            <CalcValue keyvalue={'\xB1'} onClick={plusMinus} />
          </div>
        </div>
      </div>
    </CalcWrapper>
  );
}

export default Calculator;
