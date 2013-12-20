define([
  'jquery',
  'underscore',
  'backbone',
  'collections/ProductCollection',
  'views/ProductView'
//], function($, _, Backbone, ProductCollection, ProductView) {
], function($, _, Backbone, productList, ProductView) {
	
    //var productList = new ProductCollection();
    
	var ProductListView = Backbone.View.extend({

		initialize : function() {
			this.listenTo(productList, 'add', this.addOne);
		    this.listenTo(productList, 'reset', this.addAll);
		    this.listenTo(productList, 'all', this.render);
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
