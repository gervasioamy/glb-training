define([ 'jquery', 
         'backbone' ], 
function($, Backbone) {
	'use strict';

	var AppRouter = Backbone.Router.extend({
		
		routes : {
			'cart' : 'viewCart',
			'products/:id': 'showProduct',
			'buy/:id' : 'buy'
		},

		viewCart : function viewCart(param) {
//			// Set the current filter to be used
//			Common.TodoFilter = param || '';
//
//			// Trigger a collection filter event, causing hiding/unhiding
//			// of the Todo view items
//			Todos.trigger('filter');
		},
		
		// esta ruta sería para ver un producto solo en la pag ppal.
		showProduct : function getProduct(id) {
			
			console.log('Route getProducts - id: %i', id);
		},
		
		buy : function buy(id) {
			console.log('Buying product: - id: %s', id);
		}
	});

	return AppRouter;
});