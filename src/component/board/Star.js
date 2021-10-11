import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
    width: 300px;
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

const StarPost = ({ post }) => {
  return (
    <div>
      <div>
        {post.star ? (
          <div className="starListWrap">
            <PostItem key={post.id} post={post} />
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

const Star = ({ posts }) => {
  return (
    <div>
      {posts.map(post => (
        <StarPost key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Star;
