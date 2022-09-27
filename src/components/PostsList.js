import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllPosts,
  getPostsError,
  getPostsStatus,
  fetchPosts,
} from "../redux/features/postsSlice";
import PostsExcerpt from "./PostsExcerpt";

const PostsList = () => {
  const dispatch = useDispatch();

  const posts = useSelector(getAllPosts);
  const status = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPosts());
    }
  }, [status, dispatch]);

  let content;
  if (status === "loading") {
    content = <p>Loading...</p>;
  } else if (status === "succeeded") {
    // ordering the post lists from recent to old ones
    const orderPostLists = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));

    content = orderPostLists?.map((post) => (
      <PostsExcerpt key={post.id} post={post} />
    ));
  } else if (status === "failed") {
    content = <p>{error}</p>;
  }

  return (
    <div>
      <h2>Posts</h2>
      {content}
    </div>
  );
};

export default PostsList;
