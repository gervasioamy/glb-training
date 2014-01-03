define([ 
	 'jqueryUI', 
	 'underscore', 
	 'backbone', 
	 'text!templates/productTemplate.html',
	 'collections/ShoppingCart'
], function($, _, Backbone, template, shoppingCart) {
	
	var ProductView = Backbone.View.extend({
		
//		initialize : function() {
//			this.listenTo(shoppingCart, 'add', this.cartStateChanged);
//			this.listenTo(shoppingCart, 'remove', this.cartStateChanged);
//		},
//		
//		cartStateChanged : function() {
//			if (!this.model) return;
//			if (shoppingCart.containsProduct(this.model.id)) {
//				// ya esta comprado
//				this.$(".bought").show();
//				this.$(".buyBtn").hide();				
//			} else {
//				this.$(".bought").hide();
//				this.$(".buyBtn").show();
//			}
//		},
		
		template: _.template(template),
		
		render : function() {
			var currentProduct = this.model;
			var viewModel = currentProduct.toJSON();
			//viewModel.isInCart = currentProduct.isInCart();
			viewModel.isInCart = currentProduct.isInCart;
			var templateFilled = this.template(viewModel); 
			$(templateFilled).appendTo(this.$el);
			var $img = this.$("img").first();
			$img.load(function scaleImage() {
				var img = $img[0];
				scale = Math.min(img.width, img.height);
				img.style.paddingLeft = (img.height - scale)/2 + "px";
				img.style.paddingTop = (img.width - scale)/2 + "px";
			});
			return this;
		},

	});

	return ProductView;

});
