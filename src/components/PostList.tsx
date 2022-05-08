import { FC } from "react";
import { IPost } from "../types/Post";
import PostItem from "./PostItem";

interface Props {
  posts?: IPost[];
}

const PostList: FC<Props> = ({ posts }) => {
  return (
    <ul>
      {posts?.slice(0, 10).map((post: IPost) => (
        <PostItem post={post} key={post.id} />
      ))}
    </ul>
  );
};

export default PostList;
