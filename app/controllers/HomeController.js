function HomeController($state, $stateParams, $window) {

  var home = this

  home.token = function(){
    if($window.localStorage.jwtToken)
    {return true}
    else { return false}
  }

  home.logout = function () {
    $window.localStorage.removeItem('jwtToken');
    $state.go('home.login');
  };

}

angular
.module('app')
.controller('HomeController', HomeController);
