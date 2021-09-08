import React from 'react';
import styled from 'styled-components';
import Todos from '../container/Todos';

const MainBox4Wrapper = styled.div`
  flex: 1;
  height: 400px;
  background-color: blueviolet;
`;

const MainBox4 = () => {
  return (
    <MainBox4Wrapper>
      <Todos />
    </MainBox4Wrapper>
  );
};

export default MainBox4;
