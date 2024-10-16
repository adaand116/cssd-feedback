import * as React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./Post.scss";
import i18n from "@sitevision/api/common/i18n";

const Post = ({ content, author, isNewPost, createdAt }) => {
  return (
    <div className="env-comment env-media">
      <div
        className={classNames("env-media__body", {
          [styles.newPost]: isNewPost,
        })}
      >
        <div className="env-p-left--small">
          <div className="env-comment__header">
            <h3 className="env-ui-text-subheading">
              <p className="env-text">{i18n.get("authorWrote", author)}</p>
            </h3>
          </div>
          <p
            className={classNames(
              "env-ui-text-caption env-p-bottom--xx-small",
              styles.contentText
            )}
          >
            {content}
          </p>
          <div className="env-comment__footer">
            <ul className="env-list env-list--horizontal env-list-dividers--left">
              <li className="env-list__item">
                <em className={styles.postedByText}>
                  {i18n.get("postDate", createdAt || "-")}
                </em>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

Post.propTypes = {
  content: PropTypes.string,
  author: PropTypes.string,
  isNewPost: PropTypes.bool,
  createdAt: PropTypes.string,
};

export default Post;
