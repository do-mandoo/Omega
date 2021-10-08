import { useParams, Link } from 'react-router-dom';
import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import Comments from './Comments';

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
  .starin,
  .starout {
    cursor: pointer;
    background-color: #ccc;
  }
`;

const Detail = ({ posts, handleDelete, handleStar, handleViewCount }) => {
  console.log(posts, '124432');
  const { id } = useParams();
  const post = posts.find(post => post.id === parseInt(id, 10));
  console.log(post, 'postpost');

  // 리랜더링------------------- 수정 필요함.
  const postViewW = useMemo(
    () => posts.map(post => console.log(post.id, '4923flad')),
    [posts],
  );
  console.log(postViewW, 'adfi9s');
  useEffect(() => {
    console.log('DetailUseEffect');
    const postView = posts.map(post => console.log(post, '28009sdf'));
    console.log(postView.id, '209ra0asd');
    handleViewCount(postView);
    // handleViewCount(postViewW.id);
  }, [handleViewCount, posts]);
  // ------------------------------------

  return (
    <>
      <DetailWrap>
        <main className="PostPage">
          <article className="post">
            <div className="postTop">
              <h2>{post.title}</h2>
              <p className="postDate">{post.datetime}</p>
              <div className="viewCount">조회수:{post.view}</div>
              <div className="starAll" onClick={e => handleStar(e, post.id)}>
                {post.star ? (
                  <div className="starin">즐겨찾기 추가됨</div>
                ) : (
                  <div className="starout">즐겨찾기 추가안됨</div>
                )}
              </div>
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
      <div>
        <Comments />
      </div>
    </>
  );
};

export default Detail;
