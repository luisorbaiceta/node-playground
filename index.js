"use strict";

function add(a, b, cb) {
  cb(a + b);
}

module.exports = {
  add,
};
