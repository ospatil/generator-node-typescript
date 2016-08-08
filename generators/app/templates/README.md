# Using this library in other NodeJS modules

Here is a quick example of how this library can be used in other libraries. The [TypeScript Module Resolution Logic](https://www.typescriptlang.org/docs/handbook/module-resolution.html) makes it quite easy.

When you run `npm run build` (or `gulp build` if you are using gulp), here is how the _lib_ directory looks like -

```sh
.
├── lib
│   ├── greeter.d.ts
│   ├── greeter.js
```

Now assuming you have published this amazing module to _npm_ with name `myAmazingLib`, and installed it in the module in which you need it.

- To use the `Greeter` class in a TypeScript file -

```ts
import { Greeter } from "myAmazingLib/lib/greeter";
```

- To use the `Greeter` class in a JavaScript file -

```js
const Greeter = require('myAmazingLib/lib/greeter');
```
