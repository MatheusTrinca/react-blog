import './singlePost.css';

function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <div className="singlePostAuthor">
            Author: <b>Matheus</b>
          </div>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem in
          incidunt architecto libero iure nulla porro harum debitis. Sit nam
          dolorem sunt eaque quae, nostrum autem distinctio voluptas ut neque.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem in
          incidunt architecto libero iure nulla porro harum debitis. Sit nam
          dolorem sunt eaque quae, nostrum autem distinctio voluptas ut neque.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem in
          incidunt architecto libero iure nulla porro harum debitis. Sit nam
          dolorem sunt eaque quae, nostrum autem distinctio voluptas ut neque.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem in
          incidunt architecto libero iure nulla porro harum debitis. Sit nam
          dolorem sunt eaque quae, nostrum autem distinctio voluptas ut neque.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem in
          incidunt architecto libero iure nulla porro harum debitis. Sit nam
          dolorem sunt eaque quae, nostrum autem distinctio voluptas ut neque.
        </p>
      </div>
    </div>
  );
}

export default SinglePost;
