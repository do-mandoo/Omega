import { useParams, Link } from 'react-router-dom';
import React from 'react';

const Detail = ({ posts, handleDelete }) => {
  console.log(posts, '124432');
  const { id } = useParams();
  const post = posts.find(post => post.id.toString() === id);
  return (
    <main className="PostPage">
      <article className="post">
        <h2>{post.title}</h2>
        <p className="postDate">{post.datetime}</p>
        <p className="postBody">{post.body}</p>
        <Link to={`/edit/${post.id}`}>
          <button className="editButton">Edit Post</button>
        </Link>
        <button
          className="deleteButton"
          // onClick={() => handleDelete(post.id)}
        >
          Delete Post
        </button>
      </article>
    </main>
  );
};

export default Detail;
