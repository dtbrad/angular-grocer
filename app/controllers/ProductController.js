function ProductController(product, authService) {

  this.product = product.data

  this.isAuthed = function() {
    return authService.isAuthed ? authService.isAuthed() : false
  };

  this.sortColumn = 'li.basket.date';
  this.sortReverse = false;

}

angular
.module('app')
.controller('ProductController', ProductController);
