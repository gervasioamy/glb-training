define([ 
	 'jqueryUI', 
	 'underscore', 
	 'backbone', 
	 'text!templates/productDetailTemplate.html'
], function($, _, Backbone, template) {
	
//	var max_img_width  = 600;
//	var max_img_height = 360;

	var ProductDetailView = Backbone.View.extend({		
		
		template: _.template(template),
		
		render : function() {
			var currentProduct = this.model;
			var viewModel = currentProduct.toJSON();
			viewModel.isInCart = currentProduct.isInCart();
			var templateFilled = this.template(viewModel); 
			$(templateFilled).appendTo(this.$el);
//			var $img = this.$(".productImage");
//			$img.load(function scaleImage() {
//				var img = $img[0];
//				// scale image				
//				scale_width = max_img_width / img.width;
//				scale_height = max_img_height / img.height;
//				scale = Math.min(scale_width, scale_height);
//				img.width = img.width * scale;  
//				//img.height = img.height * scale; 	
//				img.style.paddingTop = (max_img_height - img.height)/2 + "px";
//				img.style.paddingLeft = (max_img_width - img.width)/2 + "px";
//			});
			return this;
		},

	});

	return ProductDetailView;

});
