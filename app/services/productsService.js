function productsService($http, API) {

  this.getProducts = function() {
    return $http.get(API+'/products')
  };

  this.getProduct = function(id) {
  return $http.get(API+'/products/' + id);
}

}

angular.module('app')
.service('productsService', productsService)
