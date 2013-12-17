/*
 * The main 'Cart Item' model class
 */
define([
  'backbone'
], function(Backbone) {
	var CartItem = Backbone.Model.extend({
		defaults : function() {
			return {
				//product : -1,
				quantity : 1
			};
		},
		
		totalPrice : function () {
			return this.product.get('price') * this.quantity;
		}
	
	
	});
	return CartItem;

});
