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
			return this.product.get('price') * this.quantity;
		},
	
		id : function getId () {
			return this.product.id;
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
