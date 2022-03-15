import { useState } from "react";
import "./App.css";
import { AddPost } from "./components/AddPost/AddPost";
import { Post } from "./components/Post/Post";
import { UserList } from "./components/UserList/UserList";

const posts_db = [
  {
    id: "1",
    img: "https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
    title: "blog post 1",
    content: "this is the content of the post",
    description: "blog description 1",
  },
];

function App() {
  // making our data reactive with useState
  const [posts, setPosts] = useState(posts_db);
  return (
    <div className="app_container">
      <UserList />
      {/* always make the difference between the name inside the component the variable name that you are passing */}
      <AddPost setPostsInsideComponent={setPosts} />
      {/* list of posts using the map operation */}
      {posts.map((post) => {
        // return a Post compoenent for each post object
        return <Post key={post.id} {...post} setPosts={setPosts} />;
      })}
    </div>
  );
}

export default App;
