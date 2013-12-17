define([
  'jquery',
  'underscore',
  'backbone',
  'collections/ProductCollection',
  'views/ProductView'
], function($, _, Backbone, ProductCollection, ProductView) {
	
    var productList = new ProductCollection();
    
	// The Application
    
    // Our overall **AppView** is the top-level piece of UI.
    var AppView = Backbone.View.extend({

		// At initialization we bind to the relevant events on the `Contacts` collection, when items are added
		// or changed. Kick things off by loading any preexisting contacts that might be saved in
		// *localStorage*.
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
    
    return AppView;
});
