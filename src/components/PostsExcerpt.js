import React from "react";

import DateAndTime from "./DateAndTime";
import PostUser from "./PostUser";
import ReactionButton from "./ReactionButton";

const PostsExcerpt = ({ post }) => {
  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.body.substring(0, 100)}</p>
      <PostUser userId={post.userId} />
      <DateAndTime timestamp={post.date} />
      <ReactionButton post={post} />
    </div>
  );
};

export default PostsExcerpt;
