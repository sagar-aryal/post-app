import React from "react";
import { useSelector } from "react-redux";
import { getAllUsers } from "../redux/features/usersSlice";

const PostUser = ({ userId }) => {
  const users = useSelector(getAllUsers);
  const user = users.find((user) => user.id === userId);
  return <div>by {user ? user.name : "Unknown User"}</div>;
};

export default PostUser;
