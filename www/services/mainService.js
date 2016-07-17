angular.module('ionicMiniApp').service('mainService', function ($http) {

  var BASE_URL = 'http://api.themoviedb.org/3/search/';
  var KEY      = '&api_key=142dabb26885124f4e7dc1c53ed94f07';

  var queryObj = {};

  this.setSearchObject = function (query, category) {
    queryObj.query = query;
    queryObj.category = category;
    queryObj.encodedQuery = encodeURI(query);
  };

  this.getSearchObject = function () {
    return $http({
      method: 'GET',
      url: ''
    }).then(function () {
      return queryObj;
    })
  };

  this.getData = function (searchObj) {
    var searchType;
    switch (searchObj.category) {
      case 'movie':
        searchType = 'movie?query=';
        break;
      case 'tv':
        searchType = 'tv?query=';
        break;
      case 'person':
        searchType = 'person?query=';
        break;
      default:
        console.log('no category set');
    }
    console.log(BASE_URL + searchType + searchObj.encodedQuery + KEY);
    return $http({
      method: 'GET',
      url: BASE_URL + searchType + searchObj.encodedQuery + KEY
    }).then(function (response) {
      return response.data.results;
    })
  }

});