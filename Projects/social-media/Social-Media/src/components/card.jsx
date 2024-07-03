import { MdDelete } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { postListContext } from "../data/post-list-store.jsx";
import { useContext } from "react";

const Card = ({ post }) => {
  const { RemovePostList } = useContext(postListContext);
  return (
    <div className="card pk-card-item" style={{ width: "30rem" }}>
      {/* <img src="..." className="card-img-top" alt="..."/> */}
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => {
              RemovePostList(post.id);
            }}
          >
            <MdDelete />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span className="badge text-bg-warning pk-hashtag">#{tag}</span>
        ))}
        <div className="pk-response">
          <button type="button" className="btn btn-info">
            <AiFillLike />{" "}
            <span className="badge text-bg-secondary">{post.views}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Card;
