/* global angular */
(function() {
  angular
  .module('wizzle',
    ['onsen', 'wizzle.core', 'wizzle.scraper', 'coursesList', 'mainMenu']
  )
  .controller('MainController', ['$scope', 'coreFactory', 'scraperFactory',
              MainController]);

  function MainController($scope, coreFactory, scraperFactory) {
    var classroom = coreFactory.createClassroom(
      'http://aulavirtual.ucsm.edu.pe/epregrado2015/login/index.php'
    );
    var scraper = scraperFactory.createClassroomScraper(classroom);
    scraper.run();
  }
})();
