import React from 'react';

import { useFetch } from '../../hooks/useFetch';

import './PostsList.css';

const PostsList = () => {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="posts-list">
      <h2>Posts List</h2>
      <ul>
        {data.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostsList; // Ensure PostsList is exported as the default
