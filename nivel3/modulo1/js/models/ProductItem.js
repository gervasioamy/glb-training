/*
 * The main 'Cart Item' model class
 */
define([
  'backbone',
  'collections/ShoppingCart'
], function(Backbone, shoppingCart) {
	
	var ProductItem = Backbone.Model.extend({
		
		defaults : function() {
			return {
				id : -1,
				title : "",
				description : "",
				image : "",
				price : 0				
			};
		},
		
		initialize : function() {
			//this.isInCart = shoppingCart.containsProduct(this.id)
			this.set('isInCart', shoppingCart.containsProduct(this.id))
		}
	
		
//		isInCart : function isProductInCart() {
//			var prodInCart = shoppingCart.containsProduct(this.id);
//			return prodInCart ? true : false;
//		}
	
	});
	
	return ProductItem;

});
