angular.module('ionicMiniApp').controller('resultsCtrl', function ($state, mainService) {

  var results = this;

  results.loading = true;

  results.load = function () {
    mainService.getSearchObject().then(function (searchObj) {
      console.log('searchObj', searchObj);
      results.query = searchObj.query;
      results.cat   = searchObj.category;
      mainService.getData(searchObj).then(function (response) {
        console.log('response', response);
        results.tmdbData = response;
        results.loading  = false;
      })
    });
  };
  results.load();

  results.newSearch = function () {
    $state.go('home');
  }


});