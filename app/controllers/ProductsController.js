function ProductsController(products, authService) {

  this.products = products.data

  this.isAuthed = function() {
    return authService.isAuthed ? authService.isAuthed() : false
  };

  this.sortColumn = 'name';
  this.sortReverse = false;

}

angular
.module('app')
.controller('ProductsController', ProductsController);
