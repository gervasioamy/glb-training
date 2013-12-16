define([
  'underscore',
  'backbone'
], function(_, Backbone) {
		
	// Our basic **Contact** model has id, name, address, cellPhone, phone and email
	// attributes.
	var Contact = Backbone.Model.extend({
	
		// Default attributes for the contact item.
		defaults : function() {
			return {
				//id : ContactList.nextId(),
				id : -1,
				name : "",
				address : "",
				cellPhone : "",
				phone : "",
				email : ""
			};
		},
	
	// XXX custom Contact behavior here >>
	
	});
	// Return the model for the module
	return Contact;

});