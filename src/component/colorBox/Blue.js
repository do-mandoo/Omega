import React from 'react';
import styled from 'styled-components';

const BlueBox = styled.div`
  background-color: blue;
  color: #fff;
  width: 128px;
  height: 128px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Blue = () => {
  return <BlueBox className="blue">Blue</BlueBox>;
};

export default Blue;
