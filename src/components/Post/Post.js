import "./Post.css";

export function Post({ id, img, title, description, content, setPosts }) {
  const handleDelete = () => {
    setPosts((previousPosts) => {
      return previousPosts.filter((post) => {
        return post.id !== id;
      });
    });
  };

  return (
    <div className="post_container">
      <img width="100%" src={img} alt={img} />
      <h2>{title}</h2>
      <p>{description}</p>
      <hr />
      <p>{content}</p>
      <hr />
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
