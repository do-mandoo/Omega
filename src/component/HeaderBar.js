import React from 'react';
import styled from 'styled-components';
import logo1 from '../images/라이언.jpg';
import Responsive from './common/Responsive';

const HeaderBlock = styled.div`
  width: 100%;
  height: 80px;
  background: lightblue;
  box-shadow: 8px 2px 4px rgba(0, 0, 0, 0.08);
`;

const Wrapper = styled(Responsive)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  .logo {
    width: 70px;
    height: 80px;
    background: url(${logo1}) no-repeat;
    background-size: contain;
    background-position: center;
    color: transparent;
    line-height: 80px;
    .a11y {
      position: absolute;
      width: 1px;
      height: 1px;
      overflow: hidden;
      margin: -1px;
      clip-path: polygon(0 0, 0 0, 0 0);
      clip: rect(0 0 0 0);
      clip: rect(0, 0, 0, 0);
    }
  }
`;

const HeaderBar = () => {
  return (
    <HeaderBlock>
      <Wrapper>
        <div className="logo a11y">로고</div>
      </Wrapper>
    </HeaderBlock>
  );
};

export default HeaderBar;
