(function () {
  angular.module('wizzle.scraper', [])
  .factory('scraperFactory', ['$http', scraperFactory]);

  function scraperFactory ($http){
    var service = {
      createScraper : createScraper
    };

    function createScraper (url, object) {
      return new Scraper(url, object);
    }

    var Scraper = (function () {
      var Scraper = function (url, object) {
        var _url = url;
        var _object = object;
        var _spec = object.getSpec();
        var _auth;
      };

      function parse(response) {
        // TODO: parse logic, this function will use the _spec to determine 
        // which values should be scraped out of the webpage and will return
        // an object containing the data to the _object attached to the 
        // scraper.
      }

      /* run()
       * this method is responsible for fetching a webpage from a webserver.
       * Upon success, it wil send the data to the parse private function.
       */
      Scraper.prototype.run = function(){
        $http({method: 'GET', url: 'http://www.ucsm.edu.pe'})
        .then(function successCallback(response) {
          _object.setData(parse(response, _spec));
        }, function errorCallback(response) {
          console.log("Couldn't fetch web page " + response.status);
        });
      };

      Scraper.prototype.setFrequency = function(freq) {
        frequency = freq;
      };

      Scraper.prototype.getFrequency = function() {
        return frequency;
      };

      return Scraper;
    })();

    return service;
  } 
})();
