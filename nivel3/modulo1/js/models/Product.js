/*
 * The main 'Cart Item' model class
 */
define([
  'backbone',
  'collections/ShoppingCart'
], function(Backbone, shoppingCart) {
	
	var Product = Backbone.Model.extend({
		
		urlRoot : "JSON/products",
		
		defaults : function() {
			return {
				id : -1,
				title : "",
				description : "",
				image : "",
				price : 0
			};
		},
	
		isInCart : function isProductInCart() {
			var prodInCart = shoppingCart.containsProduct(this.id);
			return prodInCart ? true : false;
		}
	
	});
	
	return Product;

});
