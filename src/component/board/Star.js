import React from 'react';

const StarPost = ({ post }) => {
  return (
    <div>
      <div>
        {post.star ? (
          <div className="starListWrap">
            <div>{post.title}</div>
            <div>{post.id}</div>
            <div>{post.body}</div>
            <div>{post.datetime}</div>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

const Star = ({ posts }) => {
  return (
    <div>
      {posts.map(post => (
        <StarPost key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Star;
