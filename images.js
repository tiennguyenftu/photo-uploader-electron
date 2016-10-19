angular.module('photoUploader', [])
    .constant('baseUrl', 'http://localhost:3000')
    .controller('mainCtrl', function ($scope, $http, baseUrl) {

            $scope.listImages = function () {
                $http.get(baseUrl + '/api').success(function (images) {
                    $scope.images = images.map(function (image) {
                        return {
                            name: image.name,
                            url: baseUrl + image.url,
                            _id: image._id
                        }
                    })
                });
            };

            $scope.uploadImage = function () {
                $http.post(baseUrl + '/api').success(function () {
                    console.log('Success')
                });
            };

            $scope.listImages();


    });