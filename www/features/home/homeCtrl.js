angular.module('ionicMiniApp').controller('homeCtrl', function ($state, mainService) {

  var home = this;

  home.searchCategory = 'movie';
  home.movie = null;
  home.tvShow = null;
  home.person = null;

  home.setSearchCat = function (category) {
    home.searchCategory = category;
  };

  home.submitSearch = function () {

    var query;
    if (home.searchCategory === 'movie') {
      query = home.movie;
    } else if (home.searchCategory === 'tv') {
      query = home.tvShow;
    } else {
      query = home.person
    }

    if(!query){
      throw 'Error - Form Not Valid';
    }

    home.movie = '';
    home.tvShow = '';
    home.person = '';

    mainService.setSearchObject(query, home.searchCategory);

    $state.go('results');
  }


});