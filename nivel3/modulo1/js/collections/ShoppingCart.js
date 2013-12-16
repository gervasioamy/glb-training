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
	});
	
	return ShoppingCart;
});
