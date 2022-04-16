require("./require-esm-as-empty-object");

const test = require("flug");

test("require('quick-lru')", ({ eq }) => {
  eq(require('quick-lru'), {});
});
