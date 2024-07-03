import { useContext, useRef } from "react";
import { postListContext } from "../data/post-list-store.jsx";

const CreatePost = () => {
  const { AddPostList } = useContext(postListContext);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postContentElement = useRef();
  const tagsElement = useRef();
  const responseElement = useRef();

  const handleOnclick = (event) => {
    event.preventDefault();
    AddPostList(
      userIdElement.current.value,
      postTitleElement.current.value,
      postContentElement.current.value,
      tagsElement.current.value.split(" "),
      responseElement.current.value
    );
    userIdElement.current.value="";
    postTitleElement.current.value="";
    postContentElement.current.value="";
    tagsElement.current.value="";
    responseElement.current.value="";
  };

  return (
    <form className="form-post" onSubmit={handleOnclick}>
      <h1 className="h3 mb-3 fw-normal">Tell your friends about yourself</h1>
      <div className="form-floating">
        <input
          ref={userIdElement}
          type="text"
          className="form-control"
          id="userId"
        />
        <label htmlFor="userId">Enter your User Id</label>
      </div>
      <div className="form-floating">
        <input
          ref={postTitleElement}
          type="text"
          className="form-control"
          id="title"
        />
        <label htmlFor="PostTitle">Post Title</label>
      </div>
      <div className="form-floating">
        <textarea
          ref={postContentElement}
          className="form-control"
          style={{ height: "120px" }}
          id="PostContent"
        ></textarea>
        <label htmlFor="PostContent">Tell us more about your post</label>
      </div>
      <div className="form-floating">
        <input
          ref={tagsElement}
          type="text"
          className="form-control"
          id="tags"
        />
        <label htmlFor="tags">Please write some tags by giving space</label>
      </div>
      <div className="form-floating">
        <input
          ref={responseElement}
          type="text"
          className="form-control"
          id="response"
        />
        <label htmlFor="response">How many people have reacted</label>
      </div>
      <div className="form-floating">
        <button className="btn btn-primary w-10 py-2" type="submit">
          Post
        </button>
      </div>
    </form>
  );
};

export default CreatePost;
