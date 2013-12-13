// Bootstrap
// ...Our bootstrap file will be responsible for configuring Require.js and loading initially important dependencies.

// requireJS
require.config({
	baseUrl : 'js',
	paths : {
		jquery : 'libs/jquery/jquery',
		jqueruUI : 'libs/jquery/jquery-ui',
		jqueryJeditable : 'libs/jquery/jquery.jeditable',
		backbone : 'libs/backbone/backbone',
		backboneLocalStorage : 'libs/backbone/backbone.localStorage',
		underscore : 'libs/underscore'
	},
	
	shim: {
	    "libs/jquery/jquery.jeditable": ["jquery"],
	    "libs/jquery/jquery-ui": ["jquery"],
	    "libs/backbone/backbone.localStorage": ["backbone"]
	}

});

// Load our app module and pass it to our definition function
require([ 'app' ], function(App) {
		// The "app" dependency is passed in as "App"
		//App.initialize();
	});