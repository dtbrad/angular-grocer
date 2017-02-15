function HomeController($state, $stateParams, authService) {

  var home = this

  home.isAuthed = function() {
    return authService.isAuthed ? authService.isAuthed() : false
  };

  home.logout = function () {
    authService.logout();
    $state.go('home.login');
  };

}

angular
.module('app')
.controller('HomeController', HomeController);
