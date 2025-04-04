const jwt = require('jsonwebtoken');

const encrypt = (payload, secret) => {
  // Set expiry time (e.g., 1 hour)
    const options = {
    expiresIn: '1h' // You can change this to '15m', '7d', etc.
  };

  // Create and return JWT
  const token = jwt.sign(payload, secret, options);
  return token;
};

module.exports = encrypt;
