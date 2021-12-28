(function (app) {
    'use strict';
    app.factory('loginService', loginService);

    loginService.$inject = ['$http', '$q', 'authenticationService', 'authData'];

    function loginService($http, $q, authenticationService, authData) {
        var userInfo;
        var deferred;

        function login(userName, password) {
            deferred = $q.defer();
            var data = "grant_type=password&username=" + userName + "&password=" + password;
            $http.post('/oauth/token', data, {
                headers:
                   { 'Content-Type': 'application/x-www-form-urlencoded' }
            }).then(function (response) {
                userInfo = {
                    accessToken: response.access_token,
                    userName: userName
                };
                authenticationService.setTokenInfo(userInfo);
                authData.authenticationData.IsAuthenticated = true;
                authData.authenticationData.userName = userName;
                deferred.resolve(null);
            }, function (err, status) {
                authData.authenticationData.IsAuthenticated = false;
                authData.authenticationData.userName = "";
                deferred.resolve(err);
            });
           
            return deferred.promise;
        }

        function logOut() {
            authenticationService.removeToken();
            authData.authenticationData.IsAuthenticated = false;
            authData.authenticationData.userName = "";
        }

        return {
            login: login,
            logOut: logOut           
        }
    }
})(angular.module('fashionshop.common'));