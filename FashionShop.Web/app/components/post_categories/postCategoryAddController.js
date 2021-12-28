(function (app) {
    app.controller('postCategoryAddController', postCategoryAddController);

    postCategoryAddController.$inject = ['apiService', '$scope', 'notificationService', '$state', 'commonService'];

    function postCategoryAddController(apiService, $scope, notificationService, $state, commonService) {
        $scope.postCategory = {
            CreatedDate: new Date(),
            Status: true         
        }

        $scope.AddPostCategory = AddPostCategory;
        $scope.GetSeoTitle = GetSeoTitle;

        function GetSeoTitle() {
            $scope.postCategory.Alias = commonService.getSeoTitle($scope.postCategory.Name);
        }

        function AddPostCategory() {
            apiService.post('/api/postcategory/create', $scope.postCategory,
                function (result) {
                    notificationService.displaySuccess(result.data.Name + ' đã được thêm mới.');
                    $state.go('post_categories');
                }, function (error) {
                    notificationService.displayError('Thêm mới không thành công.');
                });
        }
        function loadParentCategory() {
            apiService.get('/api/postcategory/getallparents', null, function (result) {
                $scope.parentCategories = result.data;
            }, function () {
                notificationService.displayError('Load danh mục cha không thành công.');
            });
        }

        loadParentCategory();
    }

})(angular.module('fashionshop.post_categories'));