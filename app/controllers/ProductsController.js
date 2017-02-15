function ProductsController(products, authService) {
  this.products = products.data;

  this.isAuthed = function() {
    return authService.isAuthed ? authService.isAuthed() : false
  };

}

angular
	.module('app')
	.controller('ProductsController', ProductsController);
