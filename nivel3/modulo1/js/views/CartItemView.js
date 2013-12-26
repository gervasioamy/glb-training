define([ 
	 'jqueryUI',
	 'underscore', 
	 'backbone', 
	 'text!templates/cartItemTemplate.html'
], function($, _, Backbone, templ) {
	
	var max_img_width  = 100;
	var max_img_height = 60;

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
			//$(this.template(currentProduct)).appendTo(this.$el);
			var $img = this.$(".productImageCart");
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

		changeQuantity : function() {
			this.model.save({
				quantity :  this.$(".quantitySpinner").val()
			});
		},
		
		updateValues : function() {
			this.$(".totalPrice").html("$ " + this.model.totalPrice());
		}, 
		
		removeItem : function() {
			this.model.destroy();
		}

	});

	return CartItemView;

});
