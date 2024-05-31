
## Creating/Updating the Bundled SASS library

Following the process [recommended by `V8`](https://cran.r-project.org/web/packages/V8/vignettes/npm.html#NPM_and_browserify), we can use the `browserify` package to bundle the `sass` package for standalone use.

The only difference from the instructions above is an additional patch for compatibility with QuickJS.

The steps below install the necessary packages and create the bundle in a temporary directory:

```bash
mkdir build && cd build
npm install sass browserify

echo "global.sass = require('sass');" > in.js
npx browserify in.js -o sass_bundle.js
```

Until QuickJS is updated, the bundle will need to be patched for compatibility:

```bash
patch -p1 < /path/to/quickjs_break.patch
```

The patch file is included in the `inst` directory. The patched bundle should then be placed in the `inst` directory for use in the package.
