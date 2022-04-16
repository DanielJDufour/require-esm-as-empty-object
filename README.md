# require-esm-as-empty-object
> Require ES Modules as an Empty Object.

A workaround for "Error [ERR_REQUIRE_ESM]: require() of ES Module not supported."

### how does it work?
Intercepts failing `require(NAME_OF_ES_MODULE)` calls and returns `{}`.

### example
```js
const lru = require("quick-lru");

console.log(lru);
{}
```
