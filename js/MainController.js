function MainController() {

  var ctrl = this
  ctrl.appName = "Angular Grocer App";

}

angular
.module('app')
.controller('MainController', MainController);
