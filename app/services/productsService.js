function productsService($http, API) {

  this.getProducts = function() {
    return $http.get(API+'/products')
  };

}

angular.module('app')
.service('productsService', productsService)
