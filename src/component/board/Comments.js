import React, { useState } from 'react';
import styled from 'styled-components';

const CommentsWrapper = styled.div`
  max-width: 890px;
  border: 1px solid #ddd;
  margin: 50px auto;
  /* border-top: 10px solid purple; */
  padding-left: 10px;
`;

const CommentItemWrap = styled.div`
  display: flex;
  margin-top: 10px;
  border-bottom: 1px solid #ccc;
  button {
    margin-left: 10px;
  }
`;

const CommentItem = ({ comment, onRemove }) => {
  return (
    <CommentItemWrap>
      <div>
        {comment}&nbsp;-&nbsp;
        {new Date().toLocaleString()}
      </div>
      <button
        onClick={() => {
          onRemove(comment);
        }}
      >
        삭제
      </button>
    </CommentItemWrap>
  );
};

const CommentList = ({ comments, onRemove }) => {
  return (
    <div>
      {comments.map(comment => (
        <CommentItem key={comment} comment={comment} onRemove={onRemove} />
      ))}
    </div>
  );
};

const Comments = () => {
  const [input, setInput] = useState('');
  const [localComments, setLocalComments] = useState([]);

  const insertCommnet = comment => {
    if (!comment) return; // 공백이면 등록안됨
    setLocalComments([...localComments, comment]);
  };

  const onRemove = comment => {
    setLocalComments(localComments.filter(t => t !== comment));
  };

  const onChange = e => {
    setInput(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    insertCommnet(input.trim()); // 앞뒤 공백 없앰
    setInput(''); // input초기화
  };

  return (
    <CommentsWrapper>
      <h4>댓글</h4>
      <form onSubmit={onSubmit}>
        <input
          placeholder="댓글을 입력하세요."
          value={input}
          onChange={onChange}
        />
        <button type="submit">댓글 추가</button>
      </form>
      <CommentList comments={localComments} onRemove={onRemove} />
    </CommentsWrapper>
  );
};

export default Comments;
