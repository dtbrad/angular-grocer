function authService($window) {
  var ctrl = this;

  ctrl.parseJwt = function (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse($window.atob(base64));
  };

  ctrl.saveToken = function(token) {
    $window.localStorage['jwtToken'] = token;
  };

  ctrl.getToken = function() {
    return $window.localStorage['jwtToken'];
  };

  ctrl.logout = function () {
    $window.localStorage.removeItem('jwtToken');
  };


  ctrl.isAuthed = function () {
    var token = ctrl.getToken();
    if (token) {
      var params = ctrl.parseJwt(token);
      return Math.round(new Date().getTime() / 1000) <= params.exp;
    }
    else { return false };
  };

}

angular.module('app')
.service('authService', authService)
