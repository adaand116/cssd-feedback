import portletContextUtil from "@sitevision/api/server/PortletContextUtil";
import roleUtil from "@sitevision/api/server/RoleUtil";
import systemUserUtil from "@sitevision/api/server/SystemUserUtil";

export const isAdmin = (currentUser) => {
  const currentPage = portletContextUtil.getCurrentPage();
  const roleMatcher = roleUtil
    .getRoleMatcherBuilder()
    .setUser(currentUser)
    .addRole(roleUtil.getRoleByName("Administrator"))
    .build();

  return roleMatcher.matchesAny(currentPage);
};

export const isLoggedIn = () => (systemUserUtil.isAnonymous() ? false : true);
