angular.module('ionicMiniApp').controller('homeCtrl', function (mainService) {

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

    home.movie = '';
    home.tvShow = '';
    home.person = '';

    mainService.getData(encodeURI(query), home.searchCategory).then(function (response) {
      console.log('response', response);
    })

  }


});