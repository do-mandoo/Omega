import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import NewsApp from '../News/NewsApp';

const HomeWrap = styled.div`
  /* background-color: #eee; */
  max-width: 900px;
  margin: 10px auto;
  border-top: 10px solid yellowgreen;
  .btn {
    :active {
      background-color: orange;
      text-decoration: underline;
    }
  }
`;

const CategoryItems = styled.div`
  display: flex;
`;

const CaItem = styled.div`
  margin-right: 10px;
  cursor: pointer;
  background-color: #eee;
  ${props =>
    props.active &&
    css`
      background-color: skyblue;
      font-weight: bold;
      :hover {
        color: #fff;
        font-weight: 400;
      }
    `}
`;

const PostWrap = styled.div`
  border-bottom: 1px solid #aaa;
  article,
  .postLeft,
  .postRight {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .postRight {
    border-left: 1px solid #eee;
  }
  div,
  h2,
  p {
    padding: 5px 10px;
  }
  .aTag {
    text-decoration: none;
    color: #000;
  }
  h2 {
    /* background-color: orange; */
    width: 130px;
    margin: 0;
    padding: 0;
    font-size: 16px;
    height: 30px;
    :hover {
      text-decoration: underline;
    }
  }
  .postCategory {
    font-size: 12px;
    font-weight: 300;
    border-right: 1px solid #eee;
    width: 50px;
    text-align: center;
  }
  .postDate {
    /* background-color: skyblue; */
    width: 220px;
    margin-left: 5px;
  }
  .postId {
    /* background-color: tomato; */
    width: 70px;
  }
  .postBody {
    /* background-color: violet; */
    width: 200px;
    margin-left: 5px;
    :hover {
      text-decoration: underline;
    }
  }
  margin: 10px;
`;

const PostItem = ({ post }) => {
  return (
    <PostWrap>
      <article key={post.id}>
        <div className="postCategory">{post.category}</div>
        <Link to={`/post/${post.id}`} className="aTag">
          <div className="postLeft">
            <h2>{post.title}</h2>
            <p className="postBody">{post.body}</p>
          </div>
        </Link>
        <div className="postRight">
          <p className="postId">ID: {post.id}</p>
          <p className="postDate">{post.datetime}</p>
        </div>
        <div className="postView">{post.view}</div>
      </article>
    </PostWrap>
  );
};

// 목록들 쫘르륵
const Post = ({ posts, category }) => {
  const filterd = posts.filter(
    post => category === 'all' || post.category === category,
  );
  console.log(filterd, 'filted허허허허');
  return filterd.map(fi => <PostItem key={fi.id} post={fi} />);
};

const categories = [
  { name: 'all', text: '전체보기' },
  { name: 'nomal', text: '일반' },
  { name: 'question', text: '질문' },
];

const Categories = ({ onSelect, category }) => {
  return (
    <CategoryItems>
      {categories.map(c => (
        <CaItem
          key={c.name}
          active={category === c.name}
          onClick={() => onSelect(c.name)}
        >
          {c.text}
        </CaItem>
      ))}
    </CategoryItems>
  );
};

const Home = ({ posts }) => {
  console.log(posts, 'postsposts!');
  const [category, setCategory] = useState('all');

  const onSelect = useCallback(category => setCategory(category), []);
  console.log(category, '2993');

  return (
    <HomeWrap>
      <Categories category={category} onSelect={onSelect} />
      <main>
        <Post posts={posts} category={category} />
      </main>
      <div>
        <NewsApp />
      </div>
    </HomeWrap>
  );
};

export default Home;
