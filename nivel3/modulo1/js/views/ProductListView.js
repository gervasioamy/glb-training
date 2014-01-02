define([
  'jquery',
  'underscore',
  'backbone',
  'collections/ProductCollection',
  'collections/ShoppingCart',
  'views/ProductItemView'
], function($, _, Backbone, productList, shoppingCart, ProductItemView) {
	
	var ProductListView = Backbone.View.extend({

		initialize : function() {
			this.listenTo(productList, 'add', this.addOne);
		    this.listenTo(productList, 'reset', this.addAll);
		    this.listenTo(productList, 'all', this.render);
		    //this.listenTo(shoppingCart, 'change', this.render);
		    productList.fetch();		    
		},
	
		addOne : function(productItem) {
		    var view = new ProductItemView({
		    	model : productItem
		    });
		    $("#productList").append(view.render().$el);
		},
	
		addAll : function() {
		    Contacts.each(this.addOne, this);
		}
    });
    
    return ProductListView;
});
