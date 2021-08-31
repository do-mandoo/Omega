import React from 'react';
import styled from 'styled-components';

const HeaderStyle = styled.div`
  text-align: center;
  border-bottom: 2px dashed #aaa;
  line-height: 10px;
  h1 {
    color: #fff;
  }
`;

const Header = () => {
  return (
    <HeaderStyle>
      <h1>React todo app</h1>
      <p>Teaching one person at a time</p>
    </HeaderStyle>
  );
};

export default Header;
