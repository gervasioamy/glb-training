define([
  'backbone',
  'backboneLocalStorage',
  'models/CartItem'
], function(Backbone, Store, CartItem) {
	// The 'shopping cart' is backed by *localStorage*
	var ShoppingCart = Backbone.Collection.extend({
	
		// Reference to this collection's model.
		model : CartItem,
		localStorage : new Store("shoppingCart"),
	
		// Custom list behaviour >>
		
		addItem : function addItem(product) {
			var item = this.get(product.id);
			if (item) {
				item.increase();
			} else {
				this.create({
					product : product
				}, {
					wait: true
				});
				product.set('isInCart', true);
			}
		},
		
		containsProduct : function (productId) {
			var found = this.find(function(cartItem) {
				// FIXME no es muy agrradable esta manera de comparar objetos, pero funciona
				return JSON.stringify(cartItem.get('product').id) == productId;
			});
			return found ? true : false;
		},
		
		total : function() {
			var sum = 0;
			this.each(function(cartItem) {
				sum += cartItem.totalPrice();
			});
			return sum;
		}
		
	});
	
	return new ShoppingCart;
});
