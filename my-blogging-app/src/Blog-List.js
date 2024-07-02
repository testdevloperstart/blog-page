// BlogList.js

import React from 'react';
import { Link } from 'react-router-dom';

const BlogList = ({ blogs, title, handleDelete }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {/* here we have used map function to loop through the useState and get all the blogs written by author */}
      {blogs.map((blog) => (
        <div className="blog-item" key={blog.id}>
          <Link to = {`/blogs/${blog.id}`}>
          <h3>{blog.title}</h3>
          <h6>by, {blog.author}</h6>
          </Link>
          <p>{blog.body}</p>
          <button onClick={() => handleDelete(blog.id)}>delete blog</button>
          
        </div>
      ))}
    </div>
  );
};

export default BlogList;
