"use strict";
// Dom7
var $ = Dom7;

// Init App
var app = new Framework7({
	root: '#app',
	theme: 'md',
	routes: [
		{
			path: '/index/',
			Url: './index.html',
		},
		{
			path: '/edit-profile/',
			url: './edit-profile.html',
			component: {
				on: {
					pageInit: function (e) {
						alert('wkwkwk');
					}
				}
			}
		}
	],
	view: {
		pushState: true,
	}
});

var mainView = app.views.create('.view-main', {
	url: './index.html'
});