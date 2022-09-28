import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addNewPost } from "../redux/features/postsSlice";
import { getAllUsers } from "../redux/features/usersSlice";

const AddPostForm = () => {
  const users = useSelector(getAllUsers);
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  const userOptions = users?.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleContentChange = (e) => {
    setContent(e.target.value);
  };
  const handleUserChange = (e) => {
    setUserId(e.target.value);
  };

  const canSubmit =
    [title, content, userId].every(Boolean) && addRequestStatus === "idle";

  const handleSubmit = () => {
    if (canSubmit) {
      try {
        setAddRequestStatus("pending");
        dispatch(addNewPost({ title, body: content, userId })).unwrap();

        setTitle("");
        setContent("");
        setUserId("");
      } catch (error) {
        console.log("Failed to submit the post", error);
      } finally {
        setAddRequestStatus("idle");
      }
    }
  };

  return (
    <div>
      <h2>Add Post</h2>
      <form>
        <div>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            placeholder="Enter title.."
            onChange={handleTitleChange}
          />
        </div>
        <div>
          <textarea
            id="content"
            name="content"
            placeholder="Enter description..."
            value={content}
            onChange={handleContentChange}
          />
        </div>
        <div>
          <select
            id="user"
            name="user"
            value={userId}
            onChange={handleUserChange}
          >
            <option value=""></option>
            {userOptions}
          </select>
        </div>

        <button type="button" disabled={!canSubmit} onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddPostForm;
