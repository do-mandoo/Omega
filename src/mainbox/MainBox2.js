import React from 'react';
import styled from 'styled-components';
import Calculator from '../component/Calculator/Calculator';

const MainBox2Wrapper = styled.div`
  flex: 1;
  height: 400px;
  background-color: yellowgreen;
`;

const MainBox2 = () => {
  return (
    <MainBox2Wrapper>
      <Calculator />
    </MainBox2Wrapper>
  );
};

export default MainBox2;
