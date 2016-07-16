angular.module('ionicMiniApp').controller('homeCtrl', function (mainService) {

  var home = this;

  home.submitSearch = function () {
    console.log('home.movie', home.movie);
    console.log('home.tvShow', home.tvShow);
    console.log('home.person', home.person);

    mainService.getData().then(function (response) {
      console.log('response', response);
    })

  }




});