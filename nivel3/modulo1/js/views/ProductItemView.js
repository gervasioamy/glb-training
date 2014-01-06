define([ 
	 'jqueryUI', 
	 'underscore', 
	 'backbone', 
	 'text!templates/productItemTemplate.html',
	 'collections/ShoppingCart'
], function($, _, Backbone, template, shoppingCart) {
	
	var max_img_width  = 100;
	var max_img_height = 100;

	var ProductItemView = Backbone.View.extend({		
		
		tagName : "li",
		template: _.template(template),
		
		initialize : function() {
			this.listenTo(this.model, 'destroy', this.remove);
			this.listenTo(shoppingCart, 'add', this.cartStateChanged);
			this.listenTo(shoppingCart, 'remove', this.cartStateChanged);
		},
		
		cartStateChanged : function() {
			if (shoppingCart.containsProduct(this.model.id)) {
				// ya esta comprado
				this.$(".bought").show();
				this.$(".buyBtn").hide();				
			} else {
				this.$(".bought").hide();
				this.$(".buyBtn").show();
			}
		},

		render : function() {
			var currentProduct = this.model;
			var viewModel = currentProduct.toJSON();
			$(this.template(viewModel)).appendTo(this.$el);
			var $img = this.$(".productImage");
			$img.load(function scaleImage() {
				var img = $img[0];
				// scale image				
				scale_width = max_img_width / img.width;
				scale_height = max_img_height / img.height;
				scale = Math.min(scale_width, scale_height);
				img.width = img.width * scale;  
				//img.height = img.height * scale; 	
				img.style.paddingTop = (max_img_height - img.height)/2 + "px";
				img.style.paddingLeft = (max_img_width - img.width)/2 + "px";
			});
						
			return this;
		},

	});

	return ProductItemView;

});
