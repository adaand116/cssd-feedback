import * as React from "react";
import PropTypes from "prop-types";
import Form from "../Form";
import Posts from "../Posts";

const App = ({ posts }) => {
  return (
    <div className="env-p-around--large">
      <Form />
      {posts?.length > 0 && <Posts posts={posts} />}
    </div>
  );
};

App.propTypes = {
  posts: PropTypes.array,
};

export default App;
