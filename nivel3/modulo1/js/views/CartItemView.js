define([ 
	 'jqueryUI',
	 'underscore', 
	 'backbone', 
	 'text!templates/cartItemTemplate.html'
], function($, _, Backbone, templ) {
	
	var CartItemView = Backbone.View.extend({		
		
		tagName : "tr",
		template: _.template(templ),
		
		events : {
			"change .quantitySpinner" : "changeQuantity",
			"click a.removeItem" : "removeItem",
		},

		initialize : function() {
			this.listenTo(this.model, 'change', this.updateValues);
			this.listenTo(this.model, 'destroy', this.remove);
		},

		render : function() {
			var currentProduct = this.model;
			var viewModel = currentProduct.toJSON();
			viewModel.totalPrice = currentProduct.totalPrice();
			$(this.template(viewModel)).appendTo(this.$el);
			return this;
		},

		changeQuantity : function() {
			this.model.save({
				quantity :  this.$(".quantitySpinner").val()
			});
		},
		
		updateValues : function() {
			this.$(".totalPrice").html("$ " + this.model.totalPrice());
		}, 
		
		removeItem : function() {
			this.model.get('product').isInCart = false;
			this.model.destroy();
		}

	});

	return CartItemView;

});
