import { useState } from "react";
import { v4 } from "uuid";
import "./Post.css";

export function Post({ id, img, title, description, content, setPosts }) {
  // reactive value for the inputs
  const [imgInput, setImg] = useState(img);
  const [titleInput, setTitle] = useState(title);
  const [descriptionInput, setDescription] = useState(description);
  const [contentInput, setContent] = useState(content);

  const [show, setShow] = useState(true);
  const [edit, setEdit] = useState(false);

  const handleDelete = () => {
    setPosts((previousPosts) => {
      return previousPosts.filter((post) => {
        return post.id !== id;
      });
    });
  };

  const handleShow = () => {
    setShow((previousShow) => {
      return !previousShow;
    });
  };

  const handleEdit = (e) => {
    e.preventDefault();
    setPosts((previousPosts) => {
      return [
        {
          id: v4(),
          img: imgInput,
          title: titleInput,
          description: descriptionInput,
          content: contentInput,
        },
        ...previousPosts,
      ];
    });
    handleDelete();
  };

  return (
    <div className="post_container">
      {/* form for editing the post */}
      {edit && (
        <form onSubmit={handleEdit} className="edit_form">
          <img width="100%" src={imgInput} alt={img} />
          <input value={imgInput} onChange={(e) => setImg(e.target.value)} />
          <input
            value={titleInput}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            value={descriptionInput}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            value={contentInput}
            onChange={(e) => setContent(e.target.value)}
          />
          <button type="submit">Save</button>
          <button onClick={() => setEdit(false)}>Cancel</button>
        </form>
      )}

      {!edit && (
        <>
          <img width="100%" src={img} alt={img} />
          <h2>{title}</h2>
          <p>{description}</p>
          {show && (
            <>
              <hr />
              <p>{content}</p>
              <hr />
            </>
          )}
          <button onClick={handleShow}>
            {show ? "read less" : "read more"}
          </button>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={() => setEdit(true)}>Edit</button>
        </>
      )}
    </div>
  );
}
