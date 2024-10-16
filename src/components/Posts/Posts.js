import * as React from "react";
import PropTypes from "prop-types";
import Post from "../Post";

const Posts = ({ posts }) => {
  return (
    <>
      <div className="env-m-around--medium">
        {posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    </>
  );
};

Posts.propTypes = {
  posts: PropTypes.array,
};

export default Posts;
