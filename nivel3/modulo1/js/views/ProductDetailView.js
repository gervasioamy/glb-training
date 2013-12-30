define([ 
	 'jqueryUI', 
	 'underscore', 
	 'backbone', 
	 'text!templates/productDetailTemplate.html'
], function($, _, Backbone, template) {
	
	var ProductDetailView = Backbone.View.extend({		
		
		id : "productDetail",
		
		template: _.template(template),
		
		render : function() {
			var currentProduct = this.model;
			var viewModel = currentProduct.toJSON();
			viewModel.isInCart = currentProduct.isInCart();
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

	return ProductDetailView;

});
