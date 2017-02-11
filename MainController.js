function MainController($http, $window) {

  var ctrl = this
  ctrl.appName = "Angular Grocer App";
  ctrl.token = $window.localStorage.jwt
  ctrl.message =[]

  ctrl.signup = function () {
    $http.post('http://localhost:3000/signup', { user: ctrl.user })
    .then(function(response) {
      ctrl.message = [];
      response.data.message.forEach(function(mes){ctrl.message.push(mes)});
      $window.localStorage['jwt'] = response.data.jwt;
      ctrl.token = response.data.jwt;
      });
  };

  ctrl.login = function () {
    $http.post('http://localhost:3000/login', { user: ctrl.user })
    .then(function successCallback(response) {
      ctrl.message = [];
      response.data.message.forEach(function(mes){ctrl.message.push(mes)});
      $window.localStorage.jwt = response.data.jwt;
      ctrl.token = response.data.jwt;
    });
  };

  ctrl.getProducts = function () {
    $http({
            method: 'GET',
            url: 'http://localhost:3000/products',
            headers: {
              'Authorization': $window.localStorage.jwt
            }
          })
    .then(function successCallback(response) {
      if (response.data.error) { alert(response.data.error.message) }
      else ctrl.products = response.data
    });
  };

  ctrl.logout = function(){
    delete $window.localStorage.jwt;
    delete ctrl.token
    delete ctrl.products;
    delete ctrl.user;

  }

}

angular
.module('app')
.controller('MainController', MainController);
