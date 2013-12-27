define([
  'backbone'
], function(Backbone) {
		
	// Our basic **Contact** model has id, name, address, cellPhone, phone and email
	// attributes.
	var Contact = Backbone.Model.extend({
	
		// Default attributes for the contact item.
		defaults : function() {
			return {
				id : -1,
				name : "",
				address : "",
				cellPhone : "",
				phone : "",
				email : ""
			};
		},
	
	});
	// Return the model for the module
	return Contact;

});
