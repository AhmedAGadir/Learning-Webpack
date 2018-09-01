// Webpack is a module bundler 
// which takes modules - either: 

// 1) custom files that you created
// 2) something installed through npm

// and generates static assets.

// you can also extend what webpack can do with plugins / loaders

// a module is a discrete chunk of functionality thats often reusable

// there are other module bundlers - browserify

// webpack however allows us to use:
// 1) code splitting - break up our codebase into chunks which can be loaded on demand
// 2) loaders - webpack only uses javascript, but loaders allows us to transform other formats into JavaScript e.g.(JSX,CSS,SASS)
// 3) clever parsing

// =====

// the app.js file is now able to import modules - both npm and modules we create (js, jsx, css, scss etc etc.).

// NOTE: even if you dont have babel configured to transpile your ES6, webpack understands the ES6 modules style of code (import default, export etc)
