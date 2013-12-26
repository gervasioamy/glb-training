define([ 'jquery', 
         'backbone',
         'collections/ShoppingCart',
         'collections/ProductCollection'], 
function($, Backbone, shoppingCart, productList) {
	'use strict';

	var AppRouter = Backbone.Router.extend({
		
		routes : {
			'' : 'home',
			'cart' : 'viewCart',
			'products/:id': 'showProduct',
			'buy/:id' : 'buy'
		},
		
		home : function home() {
			$("#shoppingCart").hide(400);
			$("#productList").show(400);
		},

		viewCart : function viewCart(param) {
			$("#shoppingCart").show(400);
			$("#productList").hide(400);
		},
		
		// esta ruta sería para ver un producto solo en la pag ppal.
		showProduct : function getProduct(id) {			
			$("#shoppingCart").hide(400);
			$("#productList").hide(400);
		},
		
		buy : function buy(id) {
			console.log('Buying product: - id: %s', id);
			var item = productList.get(id);
			shoppingCart.addItem(item);
			this.navigate("cart", {trigger: true});
		}
	});

	return AppRouter;
});
