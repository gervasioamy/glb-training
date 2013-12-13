define([
  'jquery',
  'underscore',
  'backbone',
  'views/ContactView',
  'collections/ContactCollection'
], function($, _, Backbone, ContactView) {
	
	// Create our global collection of **Contacts**.
    var Contacts = new ContactList;
    
	// The Application
    // Our overall **AppView** is the top-level piece of UI.
    var AppView = Backbone.View.extend({

		// Instead of generating a new element, bind to the existing skeleton of the App already present in
		// the HTML.
		el : $("#addressBookApp"),
	
		// Delegated events for creating new items.
		events : {
		    "click #addNewButton" : "createNewContact"
		},
	
		// At initialization we bind to the relevant events on the `Contacts` collection, when items are added
		// or changed. Kick things off by loading any preexisting contacts that might be saved in
		// *localStorage*.
		initialize : function() {
		    this.listenTo(Contacts, 'add', this.addOne);
		    this.listenTo(Contacts, 'reset', this.addAll);
		    this.listenTo(Contacts, 'all', this.render);
		    Contacts.fetch();
		},
	
		// Re-rendering the App just means refreshing the statistics -- the rest of the app doesn't change.
		render : function() {
		    // TODO hacer algo en el render de la App?
		    // console.log("rendering APP view");
		},
	
		// Add a single contact item to the list by creating a view for it, and appending its element to the
		// main accrodion.
		addOne : function(contact) {
		    var view = new ContactView({
		    	model : contact
		    });
		    this.$("#accordion").append(view.render().$el);
		    this.$("#accordion").accordion("refresh");
		},
	
		// Add all items in the **Contacts** collection at once.
		addAll : function() {
		    Contacts.each(this.addOne, this);
		},
	
		createNewContact : function(event) {
		    Contacts.create({
				name : $("#inputName").val(),
				address : $("#inputAddress").val(),
				cellPhone : $("#inputCellPhone").val(),
				phone : $("#inputPhone").val(),
				email : $("#inputEmail").val()
		    });
		    console.log("creating new contact");
		},

    });
    
    return AppView;
});