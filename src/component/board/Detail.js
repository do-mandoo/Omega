import { useParams, Link } from 'react-router-dom';
import React, { useState } from 'react';
import styled from 'styled-components';

const DetailWrap = styled.div`
  max-width: 900px;
  border: 1px solid #ddd;
  margin: 10px auto;
  border-top: 10px solid purple;
  /* padding: 0px 10px; */
  position: relative;
  .postTop {
    border-bottom: 1px solid #ddd;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .postBody {
    min-height: 300px;
    padding: 10px;
  }
  .EdDeBtn {
    position: absolute;
    bottom: -40px;
    right: 10px;
  }
  button {
    margin-left: 10px;
    border: none;
    background-color: #eee;
    padding: 7px 20px;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const Detail = ({ posts, handleDelete }) => {
  const count = 0;
  console.log(posts, '124432');
  const { id } = useParams();
  const post = posts.find(post => post.id.toString() === id);
  console.log(post, 'postpost');
  return (
    <DetailWrap>
      <main className="PostPage">
        <article className="post">
          <div className="postTop">
            <h2>{post.title}</h2>
            <p className="postDate">{post.datetime}</p>
          </div>
          <p className="postBody">{post.body}</p>
          <div className="EdDeBtn">
            <Link to={`/edit/${post.id}`}>
              <button className="editButton">Edit Post</button>
            </Link>
            <button
              className="deleteButton"
              onClick={() => handleDelete(post.id)}
            >
              Delete Post
            </button>
          </div>
        </article>
      </main>
    </DetailWrap>
  );
};

export default Detail;
