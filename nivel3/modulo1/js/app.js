// main js file
define([ 
         'views/ProductListView',
         'views/ShoppingCartView',
         'collections/ShoppingCart' ], 
function(ProductListView, ShoppingCartView, shoppingCart) {
	
	$(function() {
		// we kick things off by creating the **App**.
		new ProductListView;
		new ShoppingCartView({
	    	model : shoppingCart
	    });
	});
});