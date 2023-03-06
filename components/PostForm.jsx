import React, { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";
const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: "", description: "" });

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now()
    };
    create(newPost);
    setPost({ title: "", description: "" });
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Create new post</h1>
      <form>
        {/* managed */}
        <MyInput
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          type="text"
          placeholder="title"
        />
        <MyInput
          value={post.description}
          onChange={(e) => setPost({ ...post, description: e.target.value })}
          type="text"
          placeholder="description"
        />
        <MyButton onClick={addNewPost} type="submit">
          Create
        </MyButton>
      </form>
    </div>
  );
};

export default PostForm;
