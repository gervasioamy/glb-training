define([ 
	 'jqueryUI', 
	 'underscore', 
	 'backbone', 
	 'text!templates/productTemplate.html'
], function($, _, Backbone, template) {

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
			return this;
		},

		buy : function() {
		}

	});

	return ProductView;

});
