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
				});
				product.set('isInCart', true);
			}
		},
		
		containsProduct : function (product) {
			var found = this.find(function(cartItem) {
				// FIXME no es muy agrradable esta manera de comparar objetos, pero funciona
				return JSON.stringify(cartItem.get('product')) === JSON.stringify(product);
			});
			return found;
		}
		
	});
	
	return new ShoppingCart;
});
