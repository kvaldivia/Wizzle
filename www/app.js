angular.module('wizzle', ['onsen', 'wizzle.core', 'wizzle.scraper', 'coursesList', 'mainMenu'])
.controller('MainController', ['$scope', 'CoreFactory', 'scraperFactory', function ($scope, CoreFactory, scraperFactory) {
  var classroom = CoreFactory.createClassroom();
  var scraper = scraperFactory.createScraper('www.ucsm.edu.pe', classroom);
  scraper.run();
}]);
