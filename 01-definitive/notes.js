// best one: https://hackernoon.com/a-tale-of-webpack-4-and-how-to-finally-configure-it-in-the-right-way-4e94c8e7e5c1

// if you dont have webpack installed globally then do than
$ npm install -g webpack webpack-cli 
// maybe also webpack-dev-server?

// make a new directory and move into it
$ mkdir project && cd project

// initialize a package.json file 
$ npm init
// make sure { "main": "main.js", } is set
// note: traversy made the main property point to the entry point of the code (index.js by default (he renamed it to app.js though)), 
// but after googling it seems like people differ on which file the main property should point to)
// i'll go with the way that the hackernoon article reccommended (main.js - which is also the default way)
// because it was more reliable overall.

// we need to install webpack v4 as a module and webpack-cli to run it from the terminal
$ npm install webpack webpack-cli --save-dev
//if you want to include webpack-dev-server then include it in the string above -- e.g. npm install webpack webpack-cli webpack-dev-server --save-dev 
// --save-dev installs webpack and webpack-cli locally (they'll be in our devDependancies in package.json)

// in package.json add a build script
// you can name them whatever you want 
"scripts": {"dev" : "webpack --mode development"}

// note: if you want to have a production version and a server version (localhost) use:
	"scripts": {
		// for the development mode
		"dev": "webpack --mode development" ,
		// for the production mode
		"build": "webpack --mode production",
    // for local host,
    "dev:server": "webpack-dev-server --mode development"
	}

create ./src/index.js and put some code there.
// index.js is our default entry point (where we call all our modules before they get bundled).

// now run the dev script
$ npm run dev

// now we have a a ./dist/main.js directory. but what does this mean?

// the .src/index.js file is the entry point (kind of like the root)
// the ./dist/main.js file is the bundled code

// You can override defaults in npm scripts easily, just use flags:

"scripts": {
  "dev": "webpack --mode development --entry ./src/foo.js --output ./dist/foobar.js --watch",
  "build": "webpack --mode production --entry ./src/foo.js --output ./dist/foobar.js --watch"
}

// NOTE: if you change the output folder name, remember to change the "main" property in package.json to match it.

// the entry flags can rewrite the default entry point
// the output flags can rewrite the default output point
// the watch flags enable watch mode. it will watch you file changes and recompile every time some file has been updated


// ===== Transpiling ES6

$ npm install babel-core babel-loader babel-preset-env --save-dev


// This is the part when you need to create a config file for babel.

// $ nano .babelrc  
// im guessing this is for linux

// in our root folder run: 

$ touch .babelrc

// paste inside: 

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


// see article for the rest
// ive saved it in this directory
 ------- remember: -----------------
// when you create the HTML file make sure that 
// the src attribute on the script tag points to the bundled file in the same folder (the dist folder)

-------- note: 
// if uploading this to github, remember to include a .gitignore file and /include node_modules

// ================
// i encountered some errors when trying to run: $ npm start dev
// i googled and used:

// $ npm install extract-text-webpack-plugin@next --save-dev
// $ npm i @babel/core
// $ npm run dev

// and it worked!


// see the article (see top) for configuring support for SASS and much more


// using the webpack dev server - live reloads etc
// https://github.com/webpack/webpack-dev-server
// https://bendyworks.com/blog/getting-started-with-webpack-dev-server