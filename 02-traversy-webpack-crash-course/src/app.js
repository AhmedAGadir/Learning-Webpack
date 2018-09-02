require('!style-loader!css-loader!./style.css')
// this tells webpack that we want to use the style loader and the css loader for the css file
let people = require('./people.js');
let $ = require('jquery');

$.each(people, function(ind, value) {
	$('body').append('<h1>' + people[ind].name +'</h1>')
})