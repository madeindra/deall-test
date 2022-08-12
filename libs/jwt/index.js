// import configuration
const { jwt: { secret } } = require('../libslibs/env');

// import jwt
const jsonwebtoken = require('jsonwebtoken');

const options = {
  expiresIn: '1h',
};

// token signing function
function sign(payload) {
  return jsonwebtoken.sign(payload, secret, options)
}

// token verification function
function verify(token) {
  return jsonwebtoken.verify(token, secret, options);
}

module.exports = {
  sign,
  verify,
}
