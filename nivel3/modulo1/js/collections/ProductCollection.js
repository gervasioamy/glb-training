define([
  'backbone',
  'models/Product'
], function(Backbone, Product) {
	// The 'Product List' is backed by a single JSON file (stubbed)
	var ProductCollection = Backbone.Collection.extend({
	
		model : Product,
		url : 'JSON/products.json'
		
	});
	
	return new ProductCollection;
});
