import React from 'react';

const NewPost = ({
  handleSubmit,
  postTitle,
  setPostTitle,
  postBody,
  setPostBody,
}) => {
  console.log('093248924387');
  return (
    <div>
      hhhh
      <main className="New Post">
        <h2>New Post</h2>
        <form className="newPostForm" onSubmit={handleSubmit}>
          <label htmlFor="postTitle">Title:</label>
          <input
            className="postTitle"
            value={postTitle}
            onChange={e => setPostTitle(e.target.value)}
            type="text"
            required
          />
          <label htmlFor="postBody">Post:</label>
          <textarea
            className="postBdoy"
            value={postBody}
            onChange={e => setPostBody(e.target.value)}
            required
          />
          <button type="submit">등록하기</button>
        </form>
      </main>
    </div>
  );
};

export default NewPost;
