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
		
		totalPrice : function getTotalPrice () {
			return this.get('product').price * this.get('quantity');
		},
	
		increase : function increaseItem () {
			var quantity = this.get('quantity');
			this.set('quantity', quantity++);
		},
		
		decrease : function decreaseItem () {
			var quantity = this.get('quantity');
			if (quantity > 0) {
				this.set('quantity', quantity --);
			}
		},
		
		
	
	});
	return CartItem;

});
