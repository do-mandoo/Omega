import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import Categories from './Categories';
import NewsList from './NewsList';

const NewsAppBlock = styled.div`
  /* max-height: 400px; */
  /* box-sizing: border-box; */
  /* border: 1px dashed blue; */
  /* height: 400px; */
`;

const NewsApp = () => {
  // 카테고리 상태를 useState로관리.
  const [category, setCategory] = useState('all');
  // 카테고리 값을 업데이트하는 onSelect함수도 만듦.
  const onSelect = useCallback(category => setCategory(category), []);

  return (
    <NewsAppBlock>
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </NewsAppBlock>
  );
};

export default NewsApp;
