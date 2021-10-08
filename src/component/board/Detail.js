import { useParams, Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
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

const Detail = ({ posts, handleDelete, handleStar }) => {
  useEffect(() => {
    const starFilter = posts.filter(post => post.star);
    console.log(starFilter, 'starFilter');
  }, []);

  // console.log(setStar, 'setstar');
  console.log(posts, '124432');
  const { id } = useParams();
  const post = posts.find(post => post.id === parseInt(id, 10));
  console.log(post, 'postpost');

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
                {/* <label htmlFor="starCheckBox">즐겨찾기</label> */}
                {/* {post.star === true ? (
                  <input
                    type="checkbox"
                    // checked={true}
                    // onChange={onClickStar}
                    value={post.star}
                    onClick={() => handleStar(post.id)}
                  />
                ) : (
                  <input
                    type="checkbox"
                    value={post.star}
                    // checked={false}
                    // onChange={onClickStar}
                  />
                )} */}
              </div>
              {/* <div className="viewCount">{handleViewCount}</div> */}
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
