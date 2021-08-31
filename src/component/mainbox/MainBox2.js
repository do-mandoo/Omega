import React from 'react';
import styled from 'styled-components';

const MainBox2Wrapper = styled.div`
  flex: 1;
  height: 400px;
  background-color: yellowgreen;
`;

const MainBox2 = () => {
  return (
    <MainBox2Wrapper>
      <div>계산기</div>
    </MainBox2Wrapper>
  );
};

export default MainBox2;
