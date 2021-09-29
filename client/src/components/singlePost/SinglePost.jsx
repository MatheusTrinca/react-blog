import './singlePost.css';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import axios from 'axios';
import { toast } from 'react-toastify';

function SinglePost({ post }) {
  const { user } = useContext(Context);
  const handleDelete = async () => {
    try {
      const storage = JSON.parse(localStorage.getItem('user'));
      await axios.delete(`/posts/${post.id}`, {
        headers: {
          Authorization: 'Bearer ' + storage.token,
          'Content-Type': 'application/json',
        },
      });
      window.location.replace('/');
    } catch (err) {
      toast.error('Something went wrong');
    }
  };
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img
            src={`http://localhost:5000/images/${post.photo}`}
            alt={post.title}
            className="singlePostImg"
          />
        )}
        <h1 className="singlePostTitle">
          {post.title}
          {user && post.User.id === user.user.id && (
            <div className="singlePostEdit">
              <i className="singlePostIcon far fa-edit"></i>
              <i
                className="singlePostIcon far fa-trash-alt"
                onClick={handleDelete}
              ></i>
            </div>
          )}
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
