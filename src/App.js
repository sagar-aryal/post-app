import React from "react";

import AddPostForm from "./components/AddPostForm";
import PostsList from "./components/PostsList";

const App = () => {
  return (
    <div>
      <AddPostForm />
      <PostsList />
    </div>
  );
};

export default App;
