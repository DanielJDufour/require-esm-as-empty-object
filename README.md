# require-esm-as-empty-object
> Require ES Modules as an Empty Object.

A workaround for "Error [ERR_REQUIRE_ESM]: require() of ES Module not supported."

### how does it work?
Intercepts failing `require(NAME_OF_ES_MODULE)` calls and returns `{}`.

### install
```bash
npm install require-esm-as-empty-object
```

### usage
#### using r flag
```js
// app.js
const lru = require("quick-lru"); // an ES Module

console.log(lru);
{}
...
```
```bash
node -r require-esm-as-empty-object app.js
```

#### placing at top of file
```js
// app.js
// place at top of file before requiring an ES Module
require("require-esm-as-empty-object");

const lru = require("quick-lru");
...
```
```bash
node app.js
```
