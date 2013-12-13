// Load the application once the DOM is ready, using `jQuery.ready`:

require(['jquery', 'app', 'backbone', 'backboneLocalStorage', 'underscore', 'jqueryJeditable'], function($) {


$(function() {

    // main accordion config
    var $accordion = $("#accordion");
    $accordion.accordion({
	handle : ".handle", // Default: "h3"
	panel : ".panel", // Default: ".panel"
	speed : 500, // Default: 200
	easing : "easeInOutQuad", // Default "swing"
	canOpenMultiple : false, // Default: false
	canToggle : false, // Default: false
	activeClassPanel : "open", // Default: "open"
	activeClassLi : "active", // Default: "active"
	lockedClass : "locked", // Default: "locked"
	loadingClass : "loading" // Default: "loading"
    });

    // Contact Model
    // ----------

    // Our basic **Contact** model has id, name, address, cellPhone, phone and email attributes.
    var Contact = Backbone.Model.extend({

	// Default attributes for the contact item.
	defaults : function() {
	    return {
		id : Contacts.nextId(),
		name : "",
		address : "",
		cellPhone : "",
		phone : "",
		email : ""
	    };
	},

    // XXX custom Contact behavior here >>

    });

    // Contact Collection
    // ---------------

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

    // Create our global collection of **Contacts**.
    var Contacts = new ContactList;

    // Contact Item View
    // --------------

    // The DOM element for a todo item...
    var ContactView = Backbone.View.extend({

	// tagName: "h3",
	tagName : "li",

	// Cache the template function for a single item.
	template : _.template($('#item-template').html()),

	// The DOM events specific to an item.
	events : {
	    "click .removeButton" : "removeContact"
	},

	// The ContactView listens for changes to its model, re-rendering. Since there's a one-to-one
	// correspondence between a **Contact** and a ContactView** in this app, we set a direct reference on
	// the model for convenience.
	initialize : function() {
	    this.listenTo(this.model, 'change', this.render);
	    this.listenTo(this.model, 'destroy', this.remove);
	},

	render : function() {
	    // tenemos un <li></li> (tagName) creado qeu va a ser un item del accordion.
	    // Instanciamos el template con el contact como model
	    var currentContact = this.model;
	    $(this.template(currentContact.toJSON())).appendTo(this.$el);
	    // inline edit config
	    this.$('.edit').editable(function(value, settings) {
		var toSave = {};
		// this es el div "editable". El title es el atributo que estoy editando
		toSave[this.title] = value;
		// Backbone save
		currentContact.save(toSave);
		return (value);
	    });

	    return this;
	},

	removeContact : function() {
	    console.log("removing contact: %s (id: %s)", this.model.get('name'), this.model.get('id'));
	    // Remove the item, destroy the model.
	    this.model.destroy();
	}

    });

    // The Application
    // ---------------

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

    // Finally, we kick things off by creating the **App**.
    var App = new AppView;

});

});
