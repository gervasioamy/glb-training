define([
  'jquery',
  'underscore',
  'backbone',
  'collections/ProductCollection',
  'collections/ShoppingCart',
  'views/ProductView'
], function($, _, Backbone, productList, shoppingCart, ProductView) {
	
	var ProductListView = Backbone.View.extend({

		initialize : function() {
			this.listenTo(productList, 'add', this.addOne);
		    this.listenTo(productList, 'reset', this.addAll);
		    this.listenTo(productList, 'all', this.render);
		    this.listenTo(shoppingCart, 'change', this.render);
		    productList.fetch();		    
		},
	
		addOne : function(product) {
		    var view = new ProductView({
		    	model : product
		    });
		    $("#productList").append(view.render().$el);
		},
	
		addAll : function() {
		    Contacts.each(this.addOne, this);
		}
    });
    
    return ProductListView;
});
