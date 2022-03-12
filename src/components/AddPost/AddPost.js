import { useState } from "react";
import { v4 } from "uuid";
import "./AddPost.css";

export function AddPost({ setPostsInsideComponent }) {
  // reactive variable for the input values
  const [img, setImg] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // function to handle the submition of the form
  const handleSubmit = (e) => {
    e.preventDefault();
    setPostsInsideComponent((previousPosts) => {
      return [
        {
          id: v4(),
          img,
          title,
          description,
        },
        ...previousPosts,
      ];
    });
  };

  return (
    <form onSubmit={handleSubmit} className="form_container">
      {/* each input needs a value (reactive/useState) and onChange event */}
      <input value={img} onChange={(e) => setImg(e.target.value)} />
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      {/* submit button, only active if all inputs are filled */}
      <button disabled={!(img && title && description)}>Add post</button>
    </form>
  );
}
