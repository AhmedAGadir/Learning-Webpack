// using default naming here:

// if webpack isnt installed globally do:
// $ npm install -g webpack webpack-cli webpack-dev-server

// make project and move in.
$ mkdir project && cd project

//initiate a package.json file
$ npm init
// make sure {"main": "main.js"} is set 

// install webpack locally
// webpack (webpack v4)
// webpack-cli (allows us to run it from the terminal)
// webpack-dev-server (localhost)
$ npm install webpack webpack-cli webpack-dev-server --save-dev

// in package.json add:

"scripts": {
	// for the development mode
	"dev": "webpack --mode development" ,
	// for the production mode
	"build": "webpack --mode production",
	// for local host,
	"dev:server": "webpack-dev-server --mode development"
}

// optional: add watch flag --watch for automatic rebundling when files change
// remember these are JSON files, so dont include a comma on the last key

create ./src/index.js and put some code there.
// index.js is our default entry point

// now run the dev script
$ npm run dev

// create index.html file inside ./dist folder and add script pointing towards main.js
// open it up to see how its working



// === for babel run

$ npm install babel-core babel-loader babel-preset-env --save-dev

// in our root folder run: 

$ touch .babelrc

// paste inside: 

{
"presets": [
  "env"
  ]
}

// configuring babel 

create webpack.config.js with the following content:

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

// also remove flags from our npm scripts now.

"scripts": {
  "build": "webpack --mode production",
  "dev": "webpack --mode development",
  "dev:server": "webpack-dev-server --mode development"
},

==========

theres an error when you try to run it, fix with: 

update: 

$ npm i @babel/core @babel/preset-env --save-dev


change .babelrc to: 

{
  "presets": ["@babel/preset-env"]
}











// ==== .gitignore
// add a .gitignore and include /node_modules


// ======== TO BE CONTINUED 
// ======== see 01-definitive/notes.js for what to do next