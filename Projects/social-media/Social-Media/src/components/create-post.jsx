import { Form ,redirect} from "react-router-dom";
const CreatePost = () => {

  return (
    <Form method="POST" className="form-post" >
      <h1 className="h3 mb-3 fw-normal">Tell your friends about yourself</h1>
      <div className="form-floating">
        <input
          required
          name="userId"
          type="text"
          className="form-control"
          id="userId"
        />
        <label htmlFor="userId">Enter your User Id</label>
      </div>
      <div className="form-floating">
        <input
          required
          name="title"
          type="text"
          className="form-control"
          id="title"
        />
        <label htmlFor="PostTitle">Post Title</label>
      </div>
      <div className="form-floating">
        <textarea
          required
          name="body"
          className="form-control"
          style={{ height: "120px" }}
          id="PostContent"
        ></textarea>
        <label htmlFor="PostContent">Tell us more about your post</label>
      </div>
      <div className="form-floating">
        <input
          name="tags"
          type="text"
          className="form-control"
          id="tags"
        />
        <label htmlFor="tags">Please write some tags by giving space</label>
      </div>
      <div className="form-floating">
        <input
          name="reactions"
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
    </Form>
  );
};

export async function handleSubmitByRouter(data){
  const formData= await data.request.formData();
  const postData=Object.fromEntries(formData);
  postData.tags.split(" ");
  console.log(postData);
  fetch("https://dummyjson.com/posts/1", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      console.log(post);
    });
    return redirect("/");
};

export default CreatePost;
