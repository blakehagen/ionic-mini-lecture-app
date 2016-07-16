angular.module('ionicMiniApp').service('mainService', function ($http) {

  this.getData = function () {
    return $http({
      method: 'GET',
      url: ''
    }).then(function (response) {
      return response;
    })
  }

});