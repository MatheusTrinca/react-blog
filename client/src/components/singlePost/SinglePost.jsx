import './singlePost.css';
import { Link } from 'react-router-dom';

function SinglePost({ post }) {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img src={post.photo} alt={post.title} className="singlePostImg" />
        )}
        <h1 className="singlePostTitle">
          {post.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <div className="singlePostAuthor">
            Author:{' '}
            <Link className="link" to={`/?user=${post.User.id}`}>
              <b>{post.User.username}</b>
            </Link>
          </div>
          <span className="singlePostDate">
            {new Date(post.created_at).toDateString()}
          </span>
        </div>
        <p className="singlePostDesc">{post.description}</p>
      </div>
    </div>
  );
}

export default SinglePost;
