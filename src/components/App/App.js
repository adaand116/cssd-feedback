import * as React from "react";
import PropTypes from "prop-types";
import Form from "../Form";
import Posts from "../Posts";

const App = ({ posts, isAdmin }) => {
  const showPosts = posts?.length > 0 && isAdmin === true;
  return (
    <div className="env-p-around--large">
      <Form />
      {showPosts && <Posts posts={posts} />}
    </div>
  );
};

App.propTypes = {
  posts: PropTypes.array,
  isAdmin: PropTypes.bool,
};

export default App;
