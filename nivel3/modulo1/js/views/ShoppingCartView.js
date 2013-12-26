define([ 
	 'jqueryUI',
	 'underscore', 
	 'backbone',
	 'views/CartItemView'
], function($, _, Backbone, CartItemView) {
	
	var ShoppingCartView = Backbone.View.extend({
		
		el : $("#shoppingCart"), //bound to an existing element
		
		events : {
			"click .clearOutBtn" : "clearOut"			
		},

		initialize : function() {
			//this.listenTo(this.model, 'change', this.render);
			this.listenTo(this.model, 'add', this.addOne);
		    //this.listenTo(this.model, 'reset', this.addAll);
		    //this.listenTo(this.model, 'all', this.render);
		    this.model.fetch();
		},
		
		addOne : function(item) {
			//contact.id = Contacts.nextId();
		    var view = new CartItemView({
		    	model : item
		    });
		    $("#cartItemsTable").append(view.render().$el);
		},
	
		// Add all items in the **Contacts** collection at once.
		addAll : function() {
		   //Contacts.each(this.addOne, this);
		},
		
		clearOut : function () {
			if ( confirm("Do you want to remove all items?") ) {				
				_.invoke(this.model.toArray(), 'destroy');
			}			
		},

	});

	return ShoppingCartView;

});
