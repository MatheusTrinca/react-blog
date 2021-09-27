import './single.css';
import Sidebar from '../../components/sidebar/Sidebar';
import SinglePost from '../../components/singlePost/SinglePost';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import axios from 'axios';

const Single = () => {
  const [post, setPost] = useState({
    photo: '',
    User: {
      username: '',
    },
    title: '',
    created_at: '',
    description: '',
  });
  const location = useLocation();
  const path = location.pathname;
  useEffect(() => {
    const fetchPost = async () => {
      const response = await axios.get(path);
      setPost(response.data);
    };
    fetchPost();
  }, [path]);
  return (
    <div className="single">
      <SinglePost post={post} />
      <Sidebar />
    </div>
  );
};

export default Single;
