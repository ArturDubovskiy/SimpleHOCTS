import "./styles.css";
import PostList from "./components/PostList";
import withPosts from "./hoc/WithPosts";

const PostsList = withPosts(PostList);

export default function App() {
  return (
    <div>
      <h1>Hello CodeSandbox</h1>
      <PostsList />
    </div>
  );
}
