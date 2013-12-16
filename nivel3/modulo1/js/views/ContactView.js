<<<<<<< HEAD
define([ 
	 'jqueryUI', 
	 'underscore', 
	 'backbone', 
	 'jqueryJeditable'  
], function($, _, Backbone) {
=======
define([ 'jqueryUI', 'underscore', 'backbone', 'jqueryJeditable' ], function($, _, Backbone) {
>>>>>>> branch 'master' of https://github.com/gervasioamy/glb-training.git

	// Contact Item View
	var ContactView = Backbone.View.extend({
<<<<<<< HEAD

=======
		// tagName: "h3",
>>>>>>> branch 'master' of https://github.com/gervasioamy/glb-training.git
		tagName : "li",

		// Cache the template function for a single item.
		template : _.template($('#item-template').html()),
<<<<<<< HEAD
		
=======

>>>>>>> branch 'master' of https://github.com/gervasioamy/glb-training.git
		// The DOM events specific to an item.
		events : {
			"click .removeButton" : "removeContact"
		},

		// The ContactView listens for changes to its model, re-rendering. Since there's a one-to-one
		// correspondence between a **Contact** and a ContactView** in this app, we set a direct reference on
		// the model for convenience.
		initialize : function() {
<<<<<<< HEAD
=======
			this.listenTo(this.model, 'change', this.render);
>>>>>>> branch 'master' of https://github.com/gervasioamy/glb-training.git
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

	return ContactView;

});
