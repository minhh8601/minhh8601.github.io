(function (app) {
    app.filter('homeFlagFilter', function () {
        return function (input) {
            if (input == true)
                return 'Hiển thị';
            else
                return 'Không';
        }
    });
})(angular.module('fashionshop.common'));