define([ 'jquery', 
         'backbone',
         'collections/ShoppingCart',
         'collections/ProductCollection',
         'views/ProductDetailView'], 
function($, Backbone, shoppingCart, productList, ProductDetailView) {
	'use strict';

	var productDetailView = new ProductDetailView();
	var AppRouter = Backbone.Router.extend({
		
		
		routes : {
			'' : 'home',
			'cart' : 'viewCart',
			'products/:id': 'showProduct',
			'buy/:id' : 'buy'
		},
		
		home : function home() {
			$("#productList").show(400);
			$("#shoppingCart").hide(400);
			$("#productDetail").hide(400);
		},

		viewCart : function viewCart(param) {
			$("#shoppingCart").show(400);
			$("#productList").hide(400);
			$("#productDetail").hide(400);
		},
				
		showProduct : function getProduct(id) {
			productDetailView.remove();
			$("#shoppingCart").hide(400);
			$("#productList").hide(400);

			var prod = productList.get(id);
			productDetailView.model = prod;
			var rendered = productDetailView.render(); 
			$(rendered.el).appendTo($("#productDetail"));
			$("#productDetail").show(400);
		},
		
		buy : function buy(id) {
			console.log('Buying product: - id: %s', id);
			var item = productList.get(id);
			shoppingCart.addItem(item);
			this.navigate("cart", {trigger: true});
		}
	});

	return AppRouter;
});
