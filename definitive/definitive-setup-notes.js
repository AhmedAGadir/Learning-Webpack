// best one: https://hackernoon.com/a-tale-of-webpack-4-and-how-to-finally-configure-it-in-the-right-way-4e94c8e7e5c1

// if you dont have webpack installed globally then do than
$ npm install -g webpack webpack-cli

// make a new directory and move into it
$ mkdir project && cd project

// initialize a package.json file 
$ npm init
// make sure { "main": "main.js", } is set

// we need to install webpack v4 as a module and webpack-cli to run it from the terminal
$ npm install webpack webpack-cli --save-dev
// --save-dev puts webpack and webpack-cli in our devDependancies and not in our final production code


// in package.json add a build script
"scripts": {"dev" : "webpack --mode development"}

// (note: if you want to have a production version use:
	"scripts": {
		// for the development mode
		"dev": "webpack --mode development" ,
		// for the production mode
		"build": "webpack --mode production" 
	}

create ./src/index.js and put some code there.
//index.js will be our entry point (where we call all our other js files before they get compiled) - kind of like the meeting point for all our js code.

// now run the dev script
$ npm run dev

// now we have a a ./dist/main.js directory. but what does this mean?

// the .src/index.js file is the entry point (kind of like the root)
// the ./dist/main.js file is the bundled/compiled code

// You can override defaults in npm scripts easily, just use flags:

"scripts": {
  "dev": "webpack --mode development --entry ./src/index.js --output ./dist/main.js --watch",
  "build": "webpack --mode production --entry ./src/index.js --output ./dist/main.js --watch"
}

// the entry flags can rewrite the default entry point
// the output flags can rewrite the default output point
// the watch flags enable watch mode. it will watch you file changes and recompile every time some file has been updated


// ===== Transpiling ES6

$ npm install babel-core babel-loader babel-preset-env --save-dev


// This is the part when you need to create a config file for babel.

// $ nano .babelrc  
// im guessing this is for linux

$ touch .babelrc

// inside paste: 

{
"presets": [
  "env"
  ]
}

// two options for configuring babel-loader
// 1) using a configuration file webpack.config.js
// 2) using --module-bind in your npm scripts

// configuration file

// Although webpack advertises itself as a zero-configuration platform, it mostly applies to general defaults such as entry and output.

// At this point we will create webpack.config.js with the following content:

// webpack v4
const path = require('path');
module.exports = {
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};

// also we will remove flags from our npm scripts now.

"scripts": {
  "build": "webpack --mode production",
  "dev": "webpack --mode development"
},

// Now when we run npm run build it should output us a nice minified .js file into ./dist/main.js If not, try re-installing babel-loader.


// ======= HTML and CSS imports 


see article for the rest
ive saved it in this directory



// see the article (see top) for configuring support for SASS and much more


