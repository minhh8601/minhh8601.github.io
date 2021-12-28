(function (app) {
    'use strict';
    app.factory('authenticationService', authenticationService);

    authenticationService.$inject = ['$http', '$q', '$window'];

    function authenticationService($http, $q, $window) {
        var tokenInfo;
       
        function setTokenInfo(data) {
            tokenInfo = data;
            $window.sessionStorage["TokenInfo"] = JSON.stringify(tokenInfo);
        }

        function getTokenInfo() {
            return tokenInfo;
        }

        function removeToken() {
            tokenInfo = null;
            $window.sessionStorage["TokenInfo"] = null;
        }

        function init() {
            if ($window.sessionStorage["TokenInfo"]) {
                tokenInfo = JSON.parse($window.sessionStorage["TokenInfo"]);
            }
        }

        function setHeader() {
            delete $http.defaults.headers.common['X-Requested-With'];
            if ((tokenInfo != undefined) && (tokenInfo.accessToken != undefined) && (tokenInfo.accessToken != null) && (tokenInfo.accessToken != "")) {
                $http.defaults.headers.common['Authorization'] = 'Bearer ' + tokenInfo.accessToken;
                $http.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
            }
        }

        function validateRequest() {
            var url = '/api/home/test';
            var deferred = $q.defer();
            $http.get(url).then(function () {
                deferred.resolve(null);
            }, function (error) {
                deferred.reject(error);
            });
            return deferred.promise;
        }

        init();

        return {
            setTokenInfo: setTokenInfo,
            getTokenInfo: getTokenInfo,
            removeToken: removeToken,
            init: init,
            setHeader: setHeader,
            validateRequest: validateRequest
        }

    }
})(angular.module('fashionshop.common'));

