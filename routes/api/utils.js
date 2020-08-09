// External Modules
const jwt = require("jsonwebtoken");
const {
  jwtConfig: { secret, expiresIn },
} = require("../../config");
const bearerToken = require("express-bearer-token");
const uuid = require("uuid").v4;

// Internal Modules
const UserRepository = require("../../db/userRepository");
const { River } = require("../../db/models");

// - Function to create JWT
const getUserToken = (user) => {
  const jwtId = uuid();
  const tokenData = { id: user.id, email: user.email, tokenId: jwtId };
  const token = jwt.sign({ data: tokenData }, secret, {
    expiresIn: Number.parseInt(expiresIn, 10),
  });
  return { token };
};

// - Function to restore user session by JWT tokenId
const restoreUser = (req, res, next) => {
  const { token } = req.body;
  console.log("GOT TO RESTORE USER")
  if (!token) {
    return next({ status: 401, message: "No Token" });
  }
  return jwt.verify(token, secret, null, async (err, jwtPayload) => {
    if (err) {
      err.status = 403;
      return next(err);
    }
    const { tokenId } = jwtPayload.data;
    try {
      req.user = await UserRepository.findByTokenId(tokenId);
    } catch (e) {
      return next(e);
    }
    // -- THIS ERROR CATCH IS NOT WORKING
    // if (!req.user.isValid()) {
    //   return next({ status: 404, message: "Session Not Found" });
    // }
    return next();
  });
};

// - Function to check search term against Rivers
const searchRivers = async (searchTerm) => {
  const rivers = await River.findAll();
  const matches = rivers.map((river) => {
    if (river.riverName.search(searchTerm) > 0) {
      return river;
    }
  });
  return matches;
};

const requireAuth = [bearerToken(), restoreUser];

module.exports = {
  requireAuth,
  getUserToken,
  searchRivers,
};
