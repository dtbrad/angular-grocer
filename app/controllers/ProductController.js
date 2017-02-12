function ProductController(product, authService) {


  this.product = product.data

  this.isAuthed = function() {
    return authService.isAuthed ? authService.isAuthed() : false
  };

}

angular
.module('app')
.controller('ProductController', ProductController);
