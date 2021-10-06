import React from 'react';
import styled from 'styled-components';

const NewPostWrap = styled.div`
  border: 1px solid #ddd;
  max-width: 900px;
  margin: 10px auto;
  border-top: 10px solid royalblue;
  position: relative;
  padding: 5px 0;
  h2 {
    padding: 0;
    margin: 0;
    border-bottom: 1px solid #eee;
  }
  .postTitleAll {
    /* background-color: yellowgreen; */
    display: flex;
    flex-flow: column nowrap;
    input {
      width: 300px;
      padding: 5px 10px;
    }
    margin-bottom: 10px;
  }
  .postBodyAll {
    display: flex;
    flex-flow: column nowrap;
    /* background-color: orange; */
    textarea {
      height: 300px;
      padding: 5px 10px;
      font-size: 16px;
    }
  }
  .addBtn {
    position: absolute;
    bottom: -40px;
    right: 10px;
    border: none;
    background-color: #eee;
    padding: 7px 20px;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const NewPost = ({
  handleSubmit,
  postTitle,
  setPostTitle,
  postBody,
  setPostBody,
  postCategory,
  setPostCategory,
}) => {
  console.log('093248924387');
  return (
    <NewPostWrap>
      <main className="New Post">
        <h2>New Post</h2>
        <form className="newPostForm" onSubmit={handleSubmit}>
          <div className="postTitleAll">
            <label htmlFor="postTitle">Title:</label>
            <input
              className="postTitle"
              value={postTitle}
              onChange={e => setPostTitle(e.target.value)}
              type="text"
              required
              placeholder=" 제목을 입력하세요."
            />
          </div>
          <label htmlFor="postTitle">질문:</label>
          <input
            type="radio"
            value="질문"
            onClick={e => setPostCategory(e.target.value)}
          />
          <label htmlFor="postTitle">일반:</label>
          <input
            type="radio"
            value="일반"
            onClick={e => setPostCategory(e.target.value)}
          />
          <div className="postBodyAll">
            <label htmlFor="postBody">Post:</label>
            <textarea
              className="postBdoy"
              value={postBody}
              onChange={e => setPostBody(e.target.value)}
              required
              placeholder="내용을 입력하세요"
            />
          </div>
          <button className="addBtn" type="submit">
            등록하기
          </button>
        </form>
      </main>
    </NewPostWrap>
  );
};

export default NewPost;
