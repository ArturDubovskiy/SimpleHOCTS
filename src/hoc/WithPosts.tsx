import React, { ComponentType, useEffect, useState } from "react";
import { IPost } from "../types/Post";
import { getData } from "../utils/getData";

interface InjectedProps {
  posts?: IPost[];
}

const withPosts = <T extends InjectedProps>(Component: ComponentType<T>) => {
  return (props: T) => {
    const [posts, setPosts] = useState<IPost[]>([]);

    const fetchPosts = async (): Promise<void> => {
      const postsData = await getData<IPost[]>(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(postsData);
    };

    useEffect(() => {
      fetchPosts();
    }, []);

    return <Component {...(props as T)} posts={posts} />;
  };
};

export default withPosts;
