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
			this.set('isInCart', shoppingCart.containsProduct(this.id))
		}
	
	});
	
	return ProductItem;

});
