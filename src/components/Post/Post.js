import "./Post.css";

export function Post({ id, img, title, description }) {
  return (
    <div className="post_container">
      <img width="100%" src={img} alt={img} />
      <h2>{title}</h2>
      <p>{description}</p>
      <button>Delete</button>
    </div>
  );
}
