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


// you can use either of these patterns:

// module.exports = people;

// let peeps = require('./foobar')

// or 

// export people

// import people from './foobar';

// (see my codecademy module notes)

// =============

if we want to include jquery we do:

$ npm install jquery --save

// -------

if we want to include css we need a loaders

$ npm install css-loader style-loader --save-dev

// note: this way of doing things is different than the hackerrank article
// with this way you just import the css style and thats it, 
// with the hackerrank way, the css is compiled into a ./dist/style.css, which you then link to from your ./dist/index.html

// see webpack.config.js for what to do next to compile our css more easily