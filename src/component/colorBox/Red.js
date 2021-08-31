import React from 'react';
import styled from 'styled-components';

const RedBox = styled.div`
  background-color: red;
  color: #fff;
  width: 128px;
  height: 128px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Red = () => {
  return <RedBox className="red">Red</RedBox>;
};

export default Red;
