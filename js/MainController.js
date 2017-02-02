function MainController($http) {

  var ctrl = this
  ctrl.appName = "Angular Grocer App";
  ctrl.token = window.localStorage.jwt

  ctrl.signup = function () {
    $http.post('http://localhost:3000/signup', { user: ctrl.user })
    .then(function successCallback(response) {
      if (response.data.errors) { console.log(response.data.errors) }
      else {
        console.log(response.data);
        ctrl.token = response.data.jwt
        window.localStorage['jwt'] = response.data.jwt;}
        console.log("now logged in");
      });
  };

  ctrl.getProducts = function () {
      token = window.localStorage.jwt
      $http({
              method: 'GET',
              url: 'http://localhost:3000/products',
              headers: {
                'Authorization': token
              }
            })
      .then(function successCallback(response) {
        if (response.data.error) { alert(response.data.error.message) }
        else ctrl.products = response.data
      });
    };

}

angular
.module('app')
.controller('MainController', MainController);
