// Bootstrap
// ...Our bootstrap file will be responsible for configuring Require.js and loading initially important dependencies.

// requireJS
require.config({
	baseUrl : 'js',
	paths : {
		jquery : 'libs/jquery/jquery',
		jqueryUI : 'libs/jquery/jquery-ui',
		jqueryJeditable : 'libs/jquery/jquery.jeditable',
		backbone : 'libs/backbone/backbone',
		backboneLocalStorage : 'libs/backbone/backbone.localStorage',
		underscore : 'libs/underscore',
		text : 'libs/requirejs/text'
	},
	
	// The shim config allows us to configure dependencies for
    // scripts that do not call define() to register a module
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['underscore', 'jquery' ],
            exports: 'Backbone'
        },
        backboneLocalStorage: {
            deps: ['backbone'],
            exports: 'Store'
        },
        jqueryUI: {
            deps: ['jquery'],
        	exports: "$"
        },
        jqueryJeditable: {
        	deps: ['jquery']
        }   
    },

});

// Load our app module and pass it to our definition function
require([ 'app' ], function(AppView) {
		// The "app" dependency is passed in as "App"
		//App.initialize();
	});