import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const EditorWrap = styled.div`
  max-width: 900px;
  border: 1px solid #ddd;
  margin: 10px auto;
  border-top: 10px solid tomato;
  /* padding: 0px 10px; */
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
  .editBtn {
    position: absolute;
    bottom: -40px;
    right: 10px;
    margin-left: 10px;
    border: none;
    background-color: #eee;
    padding: 7px 20px;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const Ediotr = ({
  posts,
  handleEdit,
  editBody,
  setEditBody,
  editTitle,
  setEditTitle,
}) => {
  const { id } = useParams();
  // console.log(typeof parseInt(id, 10), '여기서의id?');
  const post = posts.find(post => post.id.toString() === id);
  // console.log(post, 'find한post의id');
  // console.log(post.id === parseInt(id, 10), 'post.idㅜ무넝데');

  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [post, setEditTitle, setEditBody]);

  return (
    <EditorWrap>
      <main className="EditPost">
        <h2>Edit Post</h2>
        <form className="editPostForm">
          <div className="postTitleAll">
            <label htmlFor="postTitle">Title:</label>
            <input
              className="title"
              onChange={e => setEditTitle(e.target.value)}
              value={editTitle}
              type="text"
              required
            />
          </div>
          <div className="postBodyAll">
            <label htmlFor="postBody">Post:</label>
            <textarea
              className="text"
              onChange={e => setEditBody(e.target.value)}
              value={editBody}
              required
            />
          </div>
          <button
            type="submit"
            className="editBtn"
            onClick={() => handleEdit(post.id)}
          >
            수정 등록
          </button>
        </form>
      </main>
    </EditorWrap>
  );
};

export default Ediotr;
