import React from 'react';
import { Link } from 'react-router-dom';
import './post.css';

const Post = ({ post }) => {
  return (
    <div className="post">
      {post.photo && (
        <img
          className="postImg"
          src={`http://localhost:5000/images/${post.photo}`}
          alt={post.title}
        />
      )}
      <div className="postInfo">
        <div className="postCats">
          {post.categories &&
            post.categories.map(cat => (
              <span key={cat.id} className="postCat">
                {cat.name}
              </span>
            ))}
        </div>
        <Link to={`/posts/${post.id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.created_at).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.description}</p>
    </div>
  );
};

export default Post;
