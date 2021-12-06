import React, { useCallback, useState } from 'react';
import Categories from './Categories';
import NewsList from './NewsList';

const NewsApp = () => {
  // 카테고리 상태를 useState로관리.
  const [category, setCategory] = useState('all');
  // 카테고리 값을 업데이트하는 onSelect함수도 만듦.
  const onSelect = useCallback(category => setCategory(category), []);

  return (
    <div>
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </div>
  );
};

export default NewsApp;
