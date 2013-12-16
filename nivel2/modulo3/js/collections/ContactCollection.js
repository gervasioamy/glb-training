define([
  'underscore',
  'backbone',
  'backboneLocalStorage',
  'models/ContactModel'
], function(_, Backbone, Store, Contact) {
	// The collection of contacts is backed by *localStorage* instead of a remote server.
	var ContactList = Backbone.Collection.extend({
	
		// Reference to this collection's model.
		model : Contact,
	
		// Save all of the contact items under the `"contacts"` namespace
		//localStorage : new Backbone.LocalStorage("contacts"),
		localStorage : new Store("contacts"),
	
		// Custom list behaviour >>

		nextId : function() {
			var sorted = this.sortBy(function(contact) {
				return contact.get('id');
			}); 
			var maxid = sorted[this.length - 1].get('id');
			return maxid + 1;
		},
	
		// Contacts are sorted by their name attribute.		
		comparator : function(a, b) {
			return a.get('name').localeCompare(b.get('name'));
		},
		
		initialize : function() {
			this.on("add", function(contact) {
				if (contact.id == -1) {
					contact.id = this.nextId();
				}
			});
		}
	});
	
	return ContactList;

});
