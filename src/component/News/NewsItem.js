import React from 'react';
import styled from 'styled-components';

const NewsItemWrap = styled.div`
  display: flex;
  .thumnail {
    margin-right: 16px;
    img {
      display: block;
      width: 80px;
      height: 50px;
      object-fit: cover;
    }
  }
  .contents {
    h2 {
      margin: 0;
      font-size: 14px;
      a {
        color: #000;
      }
    }
    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 8px;
      white-space: normal;
    }
  }
  & + & {
    margin-top: 48px;
  }
`;

const NewsItem = ({ article }) => {
  const { title, descroption, url, urlToImage } = article;

  return (
    <NewsItemWrap>
      {urlToImage && (
        <div className="thumnail">
          <a href={url} target="_blank" rel="nooperner noreferrer">
            <img src={urlToImage} alt="thumnail" />
          </a>
        </div>
      )}
      <div className="contents">
        <h2>
          <a href={url} target="_blank" rel="nooperner noreferrer">
            {title}
          </a>
        </h2>
        <p>{descroption}</p>
      </div>
    </NewsItemWrap>
  );
};

export default NewsItem;
