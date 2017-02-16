function ProductsController(products, $state, $stateParams, authService, productsService) {
  var ctrl = this
  ctrl.products = products.data
  ctrl.totalProducts = parseInt(products.headers("item_count"));
  ctrl.productsPerPage = 10;
  ctrl.currentPage = $stateParams.currentPage || 1
  ctrl.totalPages = Math.ceil(ctrl.totalProducts / ctrl.productsPerPage);

  ctrl.changePage = function(num){
    productsService.getProducts(10, num)
    .then(function(){
      $state.go($state.current, { perPage: 10, currentPage: num } )
    });
  };

  ctrl.isAuthed = function() {
    return authService.isAuthed ? authService.isAuthed() : false
  };

}

angular
	.module('app')
	.controller('ProductsController', ProductsController);
