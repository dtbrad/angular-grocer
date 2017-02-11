function HomeController(authService) {

  var home = this

  home.isAuthed = function() {
    return authService.isAuthed ? authService.isAuthed() : false
  };

  home.logout = function () {
    authService.logout();
  };

}

angular
.module('app')
.controller('HomeController', HomeController);
