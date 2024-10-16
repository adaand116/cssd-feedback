import * as React from "react";
import i18n from "@sitevision/api/common/i18n";
import requester from "@sitevision/api/client/requester";
import router from "@sitevision/api/common/router";
import toasts from "@sitevision/api/client/toasts";

const Form = () => {
  const [feedbackPosted, setFeedbackPosted] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    // eslint-disable-next-line no-undef
    const formData = new FormData(form);
    const content = formData.get("content");

    requester
      .doPost({
        url: router.getStandaloneUrl("/addPost"),
        data: { content },
      })
      .then(() => {
        form.reset();
        setFeedbackPosted(true);
        toasts.publish({
          message: i18n.get("formPostFeedbackSuccessMessage"),
          type: "success",
          checkmark: true,
        });
      })
      .catch((error) => {
        toasts.publish({
          heading: i18n.get("formPostFeedbackErrorHeading"),
          message: i18n.get(
            "formPostFeedbackErrorMessage",
            JSON.stringify(error)
          ),
        });
      });
  };

  return !feedbackPosted ? (
    <form
      className="env-form"
      encType="multipart/form-data"
      onSubmit={handleSubmit}
    >
      <div className="env-form-field">
        <label htmlFor="content" className="env-form-label env-m-bottom--small">
          {i18n.get("formLabelFeedbackText")}
        </label>
        <input
          type="text"
          className="env-form-input"
          placeholder={i18n.get("formPlaceholderFeedbackText")}
          aria-placeholder={i18n.get("formPlaceholderFeedbackText")}
          name="content"
          id="content"
          required
        />
      </div>
      <button type="submit" className="env-button env-button--primary">
        {i18n.get("formPostFeedbackButton")}
      </button>
    </form>
  ) : (
    <div className="env-text">{i18n.get("thankYouForYourFeedback")}</div>
  );
};

export default Form;
