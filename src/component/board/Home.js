import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import NewsApp from '../News/NewsApp';

const HomeBlock = styled.div`
  margin: 10px auto;
  width: 1200px;
`;
const HomeWrap = styled.div`
  /* background-color: #eee; */
  /* position: relative; */
  display: flex;
  width: 1000%;
  margin: 0 auto;
  main {
    border-top: 10px solid yellowgreen;
    .btn {
      :active {
        background-color: orange;
        text-decoration: underline;
      }
    }
  }
  aside {
    margin-left: 40px;
    width: 500px;
    /* border: 1px solid red; */
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

const ULList = styled.ul`
  display: flex;
  padding: 5px 15px;
  li {
    list-style: none;
    margin-left: 20px;
  }
  .topListsName1 {
    width: 50px;
  }
  .topListsName2 {
    width: 130px;
  }
  .topListsName3 {
    width: 220px;
  }
  .topListsName4 {
    width: 90px;
  }
  .topListsName5 {
    width: 200px;
  }
`;

const PostItem = ({ post }) => {
  console.log(post, '에헤헤헤 하나의 post~~');
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
  return (
    <>
      <ULList>
        <li className="topListsName1">분류</li>
        <li className="topListsName2">제목</li>
        <li className="topListsName3">내용</li>
        <li className="topListsName4">ID</li>
        <li className="topListsName5">작성일</li>
        <li className="topListsName6">조회수</li>
      </ULList>
      {filterd.map(fi => (
        <PostItem key={fi.id} post={fi} />
      ))}
    </>
  );
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
    <HomeBlock>
      <Categories category={category} onSelect={onSelect} />
      <HomeWrap>
        <main>
          <Post posts={posts} category={category} />
        </main>
        {/* <aside>
          <NewsApp />
        </aside> */}
      </HomeWrap>
    </HomeBlock>
  );
};

export default Home;
