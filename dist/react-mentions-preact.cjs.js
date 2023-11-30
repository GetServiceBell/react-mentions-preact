'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./react-mentions-preact.cjs.prod.js");
} else {
  module.exports = require("./react-mentions-preact.cjs.dev.js");
}