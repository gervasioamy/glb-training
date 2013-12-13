// este deberia ser el main de la aplicacion
define([
  'jquery',
  'jqueryUI',
  'views/AppView'
], function($, AppView) {
	
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
		
		// Finally, we kick things off by creating the **App**.
	    new AppView;
	 });
	 
});