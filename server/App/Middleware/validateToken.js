const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

const validateToken = asyncHandler(async (req, res, next) => {
  const authHeader = req.headers.authorization || '';

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.status(401);
    throw new Error('User not authorized');
  }

  const token = authHeader.split(' ')[1];

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      res.status(401);
      throw new Error('User not authorized');
    }

    // Attach user info to request for downstream handlers
    // If you encoded as { loggedAdmin: {...} } when signing, pull that
    req.user = decoded.loggedUser || decoded;
    next();
  });
});

module.exports = validateToken;