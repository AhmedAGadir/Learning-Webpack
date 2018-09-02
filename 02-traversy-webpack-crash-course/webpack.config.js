// this didnt work - scrapping it --- dont bother reading/using this


// module.exports = {
// 	// if your entry point is in the root then use:
// 	// entry: './app.js',
// 	// however in our case well use:
// 	entry: './src/app.js',
// 	output: {
// 		// if our put file is in the same directory as the root then use:
// 		// path: __dirname, 
// 		// however in our case well use
// 		path: __dirname+'/dist',
// 		filename: 'bundle.js'
// 	},
// 	// when using loaders like the css style loader,
// 	// we have to define those in this file
// 	module: {
// 		loader: [
// 			{test: /\.css$/, loader: "style-loader!css-loader"}
// 		]
// 	}
// }

// in app.js we can now change:
// require('!style-loader!css-loader!./style.css')
// to 
// require('./style.css')

// we can also just run 
// $ webpack
// in the terminal and everything should work
