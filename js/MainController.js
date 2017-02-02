function MainController($http, $window) {

  var ctrl = this
  ctrl.appName = "Angular Grocer App";
  ctrl.token = $window.localStorage.jwt
  ctrl.user = { name: "daniel", email: "danieltbrad@gmail.com", password: "password"}

  ctrl.signup = function () {
    $http.post('http://localhost:3000/signup', { user: ctrl.user })
    .then(function successCallback(response) {
      if (response.data.errors) { console.log(response.data.errors) }
      else {
        $window.localStorage['jwt'] = response.data.jwt;}
        ctrl.token = response.data.jwt;
      });
  };

  ctrl.login = function () {
    $http.post('http://localhost:3000/login', { user: ctrl.user })
    .then(function successCallback(response) {
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
    delete window.localStorage.jwt;
    delete ctrl.token
    delete ctrl.products;
  }

}

angular
.module('app')
.controller('MainController', MainController);
