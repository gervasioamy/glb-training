/*
 * The main 'Cart Item' model class
 */
define([
  'backbone'
], function(Backbone) {
	var Product = Backbone.Model.extend({
		defaults : function() {
			return {
				id : -1,
				title : "",
				description : "",
				image : "",
				price : 0
			};
		},
	
	// XXX custom Product behavior here >>
	
	});
	return Product;

});
