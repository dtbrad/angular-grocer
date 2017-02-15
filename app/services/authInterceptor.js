function authInterceptor(API, authService) {
  return {

    request: function(config) {
      var token = authService.getToken();
      if(config.url.indexOf(API) === 0 && token) {
        config.headers.Authorization = token;
      }
      return config;
    },

    response: function(res) {
      if((res.config.url.indexOf(API) === 0) && (res.headers("jwt"))) {
        authService.saveToken(res.headers("jwt"));
      }
      return res;
    },
  }
}

angular.module('app')
.factory('authInterceptor', authInterceptor)
