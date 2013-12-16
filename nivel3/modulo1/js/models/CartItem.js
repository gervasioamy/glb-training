/*
 * The main 'Cart Item' model class
 */
define([
  'backbone'
], function(Backbone) {
	var CartItem = Backbone.Model.extend({
		defaults : function() {
			return {
				id : -1,
				title : "",
				description : "",
				image : "",
				price : ""
			};
		},
	
	// XXX custom Contact behavior here >>
	
	});
	return CartItem;

});
