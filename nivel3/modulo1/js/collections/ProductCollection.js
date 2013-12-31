define([
  'backbone',
  'models/ProductItem'
], function(Backbone, ProductItem) {
	// The 'Product List' is backed by a single JSON file (stubbed)
	var ProductCollection = Backbone.Collection.extend({
	
		model : ProductItem,
		url : 'JSON/products.json'
		
	});
	
	return new ProductCollection;
});
