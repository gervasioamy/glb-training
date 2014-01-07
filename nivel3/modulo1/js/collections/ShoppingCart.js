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
	
		addItem : function addItem(product) {
			var item = this.get(product.id);
			if (item) {
				item.increase();
			} else {
				this.create({
					productId : product.id,
					productTitle : product.title,
					productImg : product.image,
					productPrice : product.price,
					stock : product.stock
				}, {
					wait: true
				});
			}
		},
		
		containsProduct : function (productId) {
			var found = this.findWhere({
				"productId" : productId
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
