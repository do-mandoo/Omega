import React from 'react';
import styled from 'styled-components';
import MainBox1 from './mainbox/MainBox1';
import MainBox2 from './mainbox/MainBox2';
import MainBox3 from './mainbox/MainBox3';
import MainBox4 from './mainbox/MainBox4';

const MainViewStyle = styled.div`
  /* display: flex; */
`;
const Wrapper1 = styled.div`
  display: flex;
  margin: 5px;
`;
const Wrapper2 = styled.div`
  display: flex;
  margin: 5px;
`;

const MainView = () => {
  return (
    <MainViewStyle>
      <Wrapper1>
        <MainBox1 />
        <MainBox2 />
      </Wrapper1>
      <Wrapper2>
        <MainBox3 />
        <MainBox4 />
      </Wrapper2>
    </MainViewStyle>
  );
};

export default MainView;
