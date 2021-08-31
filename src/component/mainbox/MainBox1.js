import React from 'react';
import styled from 'styled-components';

const MainBox1Wrapper = styled.div`
  flex: 1;
  height: 400px;
  background-color: coral;
  margin-right: 5px;
`;

const MainBox1 = () => {
  return (
    <MainBox1Wrapper>
      <div>글쓰기</div>
    </MainBox1Wrapper>
  );
};

export default MainBox1;
