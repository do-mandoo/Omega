import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Ediotr = ({
  posts,
  handleEdit,
  editBody,
  setEditBody,
  editTitle,
  setEditTitle,
}) => {
  const { id } = useParams();
  const post = posts.find(post => post.id.toString() === id);

  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [post, setEditTitle, setEditBody]);

  return (
    <main className="NewPost">
      <h2>Edit Post</h2>
      <form className="newPostForm">
        <label htmlFor="postTitle">Title:</label>
        <input
          className="title"
          onChange={e => setEditBody(e.target.value)}
          value={editTitle}
          type="text"
          required
        />
        <label htmlFor="postBody">Post:</label>
        <input
          className="text"
          onClick={e => setEditBody(e.target.value)}
          value={editBody}
          required
        />
        <button type="submit" onClick={() => handleEdit(post.id)}>
          등록
        </button>
      </form>
    </main>
  );
};

export default Ediotr;
