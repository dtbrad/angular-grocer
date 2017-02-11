function userService($http, API) {

  this.signup = function(user) {
    return $http.post(API+'/signup', { user: user })
  };

  this.signin = function(user) {
    return $http.post(API + '/login', { user: user })
  };

}

angular.module('app')
.service('userService', userService)
