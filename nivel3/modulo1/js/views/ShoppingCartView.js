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
			this.listenTo(this.model, 'change', this.updateTotalPrice);
			this.listenTo(this.model, 'add', this.addOne);
		    this.model.fetch({
		    	success :  this.updateTotalPriceOnInit
		    });
		},
		
		addOne : function(item) {
		    var view = new CartItemView({
		    	model : item
		    });
		    $("#cartItemsTable").append(view.render().$el);
		    this.updateTotalPrice();
		},
	
		clearOut : function () {
			if ( confirm("Do you want to remove all items?") ) {				
				_.invoke(this.model.toArray(), 'destroy');
			}
			$(".allCartItemPrice").html("0");
		},
		
		updateTotalPriceOnInit : function (shoppingCart) {
			var total = shoppingCart.total();
			$(".allCartItemPrice").html(total);
		},
		
		updateTotalPrice : function () {
			var total = this.model.total();
			$(".allCartItemPrice").html(total);
		},		

	});

	return ShoppingCartView;

});
