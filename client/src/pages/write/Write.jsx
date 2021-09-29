import axios from 'axios';
import { useRef, useContext, useState } from 'react';
import './write.css';
import { toast } from 'react-toastify';
import { Context } from '../../context/Context';

const Write = () => {
  const { user } = useContext(Context);
  const [file, setFile] = useState(null);
  const titleRef = useRef();
  const descriptionRef = useRef();

  const handleSubmit = async e => {
    e.preventDefault();
    const newPost = {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      photo: '',
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append('name', filename);
      data.append('file', file);
      newPost.photo = filename;
      const storage = JSON.parse(localStorage.getItem('user'));
      try {
        const config = {
          headers: {
            Authorization: 'Bearer ' + storage.token,
            'Content-Type': 'application/json',
          },
        };
        await axios.post('/upload', data, config);
      } catch (err) {
        console.log(err);
        toast.error('Error uploading photo');
      }
    }

    try {
      const storage = JSON.parse(localStorage.getItem('user'));
      const config = {
        headers: {
          Authorization: 'Bearer ' + storage.token,
          'Content-Type': 'application/json',
        },
      };
      const response = await axios.post('/posts', newPost, config);
      window.location.replace(`/post/${response.data._id}`);
    } catch (err) {
      toast.error('Something went wrong');
    }
  };

  return (
    <div className="write">
      {file && (
        <img
          className="writeImg"
          src={URL.createObjectURL(file)}
          alt={titleRef.current.value}
        />
      )}
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input
            id="fileInput"
            type="file"
            style={{ display: 'none' }}
            onChange={e => setFile(e.target.files[0])}
          />
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
            ref={titleRef}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
            ref={descriptionRef}
          />
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
};

export default Write;
