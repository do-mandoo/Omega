import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomeWrap = styled.div`
  /* background-color: #eee; */
  max-width: 900px;
  margin: 10px auto;
  border-top: 10px solid yellowgreen;
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
    width: 360px;
    margin-left: 5px;
    :hover {
      text-decoration: underline;
    }
  }
  margin: 10px;
`;

// 목록들 쫘르륵
const Post = ({ post }) => {
  console.log(post, '12목록들쫘라락. /');
  const postBody = post.body;
  return (
    <PostWrap>
      <article>
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
      </article>
    </PostWrap>
  );
};

const Home = ({ posts }) => {
  console.log(posts, '2993');
  return (
    <HomeWrap>
      <main>
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </main>
    </HomeWrap>
  );
};

export default Home;
