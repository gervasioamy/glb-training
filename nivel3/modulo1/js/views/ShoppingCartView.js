define([ 
	 'jqueryUI',
	 'underscore', 
	 'backbone',
	 'views/CartItemView'
], function($, _, Backbone, CartItemView) {
	
	var ShoppingCartView = Backbone.View.extend({
		
		$el : $("#shoppingCart"),
		
		events : {
			// aca podria definir eventos como:
			// - vaciar el carrito
			// - submitear el carrito (comprar todo)
			//"click .buyButton" : "buy"
		},

		initialize : function() {
			//this.listenTo(this.model, 'change', this.render);
			this.listenTo(this.model, 'add', this.addOne);
		    this.listenTo(this.model, 'reset', this.addAll);
		    this.listenTo(this.model, 'all', this.render);
		    this.model.fetch();
		},
		
		addOne : function(item) {
			//contact.id = Contacts.nextId();
		    var view = new CartItemView({
		    	model : item
		    });
		    $("#cartItemsList").append(view.render().$el);
		},
	
		// Add all items in the **Contacts** collection at once.
		addAll : function() {
		    Contacts.each(this.addOne, this);
		},

/*
		render : function() {
			var currentProduct = this.model;
			$(this.template(currentProduct.toJSON())).appendTo(this.$el);
			var $img = this.$(".productImage");
			return this;
		},
*/

	});

	return ShoppingCartView;

});
