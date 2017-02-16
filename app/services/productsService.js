function productsService($http, API) {

  this.getProducts = function(perPage, currentPage) {
    perPage = perPage || 10
    currentPage = currentPage || 1
    var url = API+'/products?per_page=' + perPage + '&page=' + currentPage
    return $http.get(url)
  };

  this.getProduct = function(id) {
  return $http.get(API+'/products/' + id);
}

}

angular.module('app')
.service('productsService', productsService)
