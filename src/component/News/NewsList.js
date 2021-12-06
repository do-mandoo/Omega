import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import NewsItem from './NewsItem';

const NewsWrap = styled.div`
  box-sizing: border-box;
  padding-bottom: 48px;
  width: 768px;
  margin: 0 auto;
  margin-top: 32px;
  border: 1px solid rgba(0, 0, 0, 0.05);
`;

const NewsList = ({ category }) => {
  const [newsDataArticles, setNewsDataArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // async를 사용하는 함수 따로 선언
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = category === 'all' ? '' : `&category=${category}`;
        // const query = '&category=health';
        const res = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=8423bdfd9c1e4b52ba8440e3d8664d0c`,
        );
        setNewsDataArticles(res.data.articles);
      } catch (error) {
        console.log(error, '뉴스데이터 가져오기 에러');
      }
      setLoading(false);
    };
    fetchData();
  }, [category]);

  // 대기중일 때
  if (loading) {
    return <NewsWrap>대기 중 ....</NewsWrap>;
  }
  // 아직 articles 값이 설정되지 않았을 때
  if (!newsDataArticles) {
    return null;
  }

  // articles 값이 유효할 때
  return (
    <>
      <NewsWrap>
        {newsDataArticles.map(article => (
          <NewsItem key={article.url} article={article} />
        ))}
      </NewsWrap>
    </>
  );
};

export default NewsList;
