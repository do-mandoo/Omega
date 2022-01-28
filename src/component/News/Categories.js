import React from 'react';
import styled, { css } from 'styled-components';

const CategoryLists = [
  { name: 'all', text: '전체보기' },
  { name: 'business', text: '비즈니스' },
  { name: 'entertainment', text: '엔터테인먼트' },
  { name: 'health', text: '건강' },
  { name: 'science', text: '과학' },
  { name: 'sports', text: '스포츠' },
  { name: 'technology', text: '기술' },
];

const CategoriesWrap = styled.div`
  display: flex;
  padding: 16px;
  /* width: 650px; */
  width: 400px;
  margin: 0 auto;
  border: 1px solid red;
`;

const Category = styled.div`
  /* font-size: 20px; */
  font-size: 12px;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 4px;

  &:hover {
    color: #490507;
  }
  & + & {
    margin-left: 16px;
  }

  ${props =>
    props.active &&
    css`
      font-weight: 600;
      border-bottom: 2px solid #22b8cf;
      color: #22b8cf;
      &:hover {
        color: #3bc9db;
      }
    `}
`;

const Categories = ({ category, onSelect }) => {
  return (
    <CategoriesWrap>
      {CategoryLists.map(c => (
        <Category
          key={c.name}
          active={category === c.name}
          onClick={() => onSelect(c.name)}
        >
          {c.text}
        </Category>
      ))}
    </CategoriesWrap>
  );
};

export default Categories;
