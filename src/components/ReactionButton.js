import React from "react";
import { useDispatch } from "react-redux";
import { reactionAdded } from "../redux/features/postsSlice";

const reactionEmoji = {
  thumbUp: "👍",
  wow: "😂",
  heart: "💝",
  rocket: "🚀",
  coffee: "☕",
};

const ReactionButton = ({ post }) => {
  const dispatch = useDispatch();

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        onClick={() =>
          dispatch(reactionAdded({ postId: post.id, reaction: name }))
        }
      >
        {emoji} {post.reactions[name]}
      </button>
    );
  });

  return <div>{reactionButtons}</div>;
};

export default ReactionButton;
