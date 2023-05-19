import { UnauthenticatedError } from "../errors/index.js";

const checkPermissions = (requestUser, resourceUserId) => {
  if (requestUser.userId === resourceUserId.toString()) {
    return;
  } else {
    throw new UnauthenticatedError("Not Authorized to access this route");
    return;
  }
};

export default checkPermissions;
