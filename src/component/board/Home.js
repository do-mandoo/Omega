import React from 'react';
import Feed from './Feed';

const Home = ({ posts }) => {
  console.log(posts, '2993');
  return (
    <div>
      <main>
        <Feed posts={posts} />
      </main>
    </div>
  );
};

export default Home;
