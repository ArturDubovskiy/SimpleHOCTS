import { FC } from "react";
import { IPost } from "../types/Post";

const PostItem: FC<{ post: IPost }> = ({ post }) => {
  return <li>{post.title}</li>;
};

export default PostItem;
