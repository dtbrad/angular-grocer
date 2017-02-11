function SessionController($state, $stateParams, userService, authService) {

  var ctrl = this;
  ctrl.message = [];

  function handleRequest(response){
    ctrl.message = [];
    response.data.message.forEach(function(mes){ctrl.message.push(mes)});
    if (authService.isAuthed())
    {
      $state.go('home.products');
    }
  }

  ctrl.signup = function() {
    userService.signup(ctrl.user)
    .then(handleRequest)
  }

  ctrl.signin = function() {
    userService.signin(ctrl.user)
    .then(handleRequest)
  }

}

angular
.module('app')
.controller('SessionController', SessionController);
