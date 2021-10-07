import React, { useState } from 'react';

const CommentItem = ({ comment, onRemove }) => {
  return (
    <div>
      <div>{comment}</div>
      <button
        onClick={() => {
          onRemove(comment);
        }}
      >
        삭제
      </button>
    </div>
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
    <div>
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
    </div>
  );
};

export default Comments;
