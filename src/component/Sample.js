import React from 'react';

const Sample = ({ loadingPost, board }) => {
  return (
    <div>
      <section>
        <h1>포스트</h1>
        {loadingPost && '로딩중...'}
        {!loadingPost && board && (
          <div>
            <h3>{board.title}</h3>
            <h3>{board.body}</h3>
          </div>
        )}
      </section>
    </div>
  );
};

export default Sample;
