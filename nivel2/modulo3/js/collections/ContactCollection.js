define([
  'underscore',
  'backbone',
  'backboneLocalStorage',
  // Pull in the Model module from above
  'models/ContactModel'
], function(_, Backbone, Contact) {
	// The collection of contacts is backed by *localStorage* instead of a remote server.
	var ContactList = Backbone.Collection.extend({
	
		// Reference to this collection's model.
		model : Contact,
	
		// Save all of the contact items under the `"contacts"` namespace
		localStorage : new Backbone.LocalStorage("contacts"),
	
		// Custom list behaviour >>
	
		nextId : function() {
			if (!this.length)
				return 1;
			return this.last().get('id') + 1;
		},
	
		// Contacts are sorted by their name attribute.
		comparator : function(a, b) {
			return a.get('name').localeCompare(b.get('name'));
		}
	
	});
	return ContactList;

});