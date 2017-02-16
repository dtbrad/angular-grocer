angular
  .module('app', ['ui.router', 'angularUtils.directives.dirPagination'])
  .constant('API', 'http://localhost:3000')
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  })
  .config(['$locationProvider', function($locationProvider) {
    $locationProvider.hashPrefix('');
  }])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url:'/',
        controller: 'HomeController as home',
        templateUrl: 'app/views/home.html'
      })
      .state('home.login', {
        url:'login',
        controller: 'SessionController as session',
        templateUrl: 'app/views/session.html'
      })
      .state('home.products', {
        url: 'products',
        controller: 'ProductsController as prod',
        templateUrl: 'app/views/products.html',
        params: {
            perPage: null, currentPage: null
        },
        resolve: {
          products: function(productsService, $stateParams){
            return productsService.getProducts($stateParams.perPage, $stateParams.currentPage);
          }
        }
      })
      .state('home.product', {
      url:'products/:id',
      controller: 'ProductController as prod',
      templateUrl: 'app/views/product.html',
      resolve: {
        product: function($stateParams, productsService){
          return productsService.getProduct($stateParams.id)
        },
      }
    })
      $urlRouterProvider.otherwise('login');
  });
