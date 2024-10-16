import * as React from "react";
import { renderToStaticMarkup, renderToString } from "react-dom/server";
import router from "@sitevision/api/common/router";
import App from "./components/App";
import restAppInvokerFactory from "@sitevision/api/server/RestAppInvokerFactory";
import portletContextUtil from "@sitevision/api/server/PortletContextUtil";
import versionUtil from "@sitevision/api/server/VersionUtil";
import { isAdmin, isLoggedIn } from "./utils/userUtils";
import i18n from "@sitevision/api/common/i18n";

// Middleware to handle authentication
router.use((req, res, next) => {
  if (!isLoggedIn()) {
    return;
  }

  next();
});

const restApp = restAppInvokerFactory.fromPath("/rest-api/feedbackBackend");

router.get("/", (req, res) => {
  const isOnline =
    versionUtil.getCurrentVersion() === versionUtil.ONLINE_VERSION;

  if (!isOnline) {
    return res.send(
      renderToStaticMarkup(
        <span className="env-text">
          <em>{i18n.get("onlyAvailableOnline")}</em>
        </span>
      )
    );
  }

  let data = {};

  // Admin check is also done in the middelware in the RESTApp for this endpoint
  if (isAdmin(portletContextUtil.getCurrentUser())) {
    try {
      const posts = restApp.get("/getPosts", {
        pageId: portletContextUtil.getCurrentPage().getIdentifier(),
      }).body;

      data = {
        posts,
        isAdmin: true,
      };
    } catch (error) {
      return res.status(500).send(
        renderToStaticMarkup(
          <span className="env-text env-color--danger">
            <em>{i18n.get("somethingWentWrongWhenFetchingPosts")}</em>
          </span>
        )
      );
    }
  } else {
    data = {
      isAdmin: false,
    };
  }

  return res.agnosticRender(renderToString(<App {...data} />), data);
});

router.post("/addPost", (req, res) => {
  const content = req.params?.content;
  if (!content) {
    return res.status(400);
  }

  const result = restApp.post("/addPost", {
    pageId: portletContextUtil.getCurrentPage().getIdentifier(),
    content,
  });

  if (result.statusCode >= 200 && result.statusCode < 300) {
    return res.status(204);
  }

  return res.status(result.statusCode);
});
