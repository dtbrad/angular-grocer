angular
  .module('app', ['ui.router'])
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
        resolve: {
          products: function(productsService){
            return productsService.getProducts();
          }
        }
      })
      $urlRouterProvider.otherwise('products');
  });
