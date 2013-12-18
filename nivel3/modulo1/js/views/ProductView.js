define([ 
	 'jqueryUI', 
	 'underscore', 
	 'backbone', 
	 'text!templates/productTemplate.html'
], function($, _, Backbone, template) {
	
	var max_img_width  = 300;
	var max_img_height = 180;

	var ProductView = Backbone.View.extend({		
		
		tagName : "li",
		template: _.template(template),
		
		events : {
			"click .buyButton" : "buy"
		},

		initialize : function() {
			this.listenTo(this.model, 'change', this.render);
			this.listenTo(this.model, 'destroy', this.remove);
		},

		render : function() {
			var currentProduct = this.model;
			$(this.template(currentProduct.toJSON())).appendTo(this.$el);
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

		buy : function() {
		}

	});

	return ProductView;

});
