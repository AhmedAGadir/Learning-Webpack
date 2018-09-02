// this tells webpack that we want to use the style loader and the css loader for the css file
// require('!style-loader!css-loader!./style.css')
// if you want to do it in an easier way, refer to the webpack.config.js file, after setting it up like that, you can just write the following:
require('./style.css')

let people = require('./people.js');
let $ = require('jquery');

$.each(people, function(ind, value) {
	$('body').append('<h1>' + people[ind].name +'</h1>')
})