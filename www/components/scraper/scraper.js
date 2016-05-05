/* global angular */
(function() {
  angular.module('wizzle.scraper', ['wizzle.core', 'wizzle.utils'])
  .factory('scraperFactory', ['$http', 'utilities', scraperFactory]);

  /**
   * @module scraper
   * */
  /**
   * Defines the interface for the scraperFactory.
   * @param {AngularService} $http The $http service from angularjs.
   * @param {Function} utilities A utilities service from wizzle.utils.
   * @return {Object} The object that allows the creation of new Scrapers.
   * */
  function scraperFactory($http, utilities) {
    var Scraper;
    var ClassroomScraper;
    var CourseScraper;
    var CourseEventScraper;
    var factory = {
      createClassroomScraper: createClassroomScraper,
      createCourseScraper: createCourseScraper,
      createCourseEventScraper: createCourseEventScraper
    };

    Scraper = (function() {
      /**
      * This is the Scraper constructor function, every scraper in wizzle
      * @constructor
      * @param {CoreObject} object The CoreObject which will be filled by the
      * scraper.
      */
      function Scraper(object) {
        this._data = object;
        this._url = object.getUrl();
        this._spec = object.getSpec();
        this._auth = {};
        this._history = {};
      }

      /**
       * Parses the htmlString and fills an spec compliant object.
       * @param {String} htmlString The string containing a web page html.
       * @param {Object} spec The spec object containing the data to be scraped
       * from the html string.
       * @return {Object} The object containing relevant data.
       * */
      Scraper.prototype.parse = function(htmlString, spec) {
        return htmlString + spec;
      };

      Scraper.prototype.run = function() {
        $http({method: 'GET', url: this._url})
        .then(function successCallback(response) {
          this._object.setData(this.parse(response, this._spec));
        }, function errorCallback(response) {
          console.log("Couldn't fetch web page " + response.status);
        });
      };

      Scraper.prototype.setFrequency = function(freq) {
        this._frequency = freq;
      };

      Scraper.prototype.getFrequency = function() {
        return this._frequency;
      };

      return Scraper;
    })();

    ClassroomScraper = (function(superClass) {
      utilities.extend(ClassroomScraper, superClass);

      function ClassroomScraper(...args) {
        var tmp = ClassroomScraper.uber.constructor.apply(this, args);
        return tmp;
      }

      ClassroomScraper.prototype.parse = function() {
        // do the parsing.
      };

      return ClassroomScraper;
    })(Scraper);

    CourseScraper = (function(superClass) {
      utilities.extend(CourseScraper, superClass);

      function CourseScraper(...args) {
        var tmp = CourseScraper.uber.constructor.apply(this, args);
        return tmp;
      }

      CourseScraper.prototype.parse = function() {
        // do the parsing.
      };

      return CourseScraper;
    })(Scraper);

    CourseEventScraper = (function(superClass) {
      utilities.extend(CourseEventScraper, superClass);

      function CourseEventScraper(...args) {
        var tmp = CourseEventScraper.uber.constructor.apply(this, args);
        return tmp;
      }

      CourseEventScraper.prototype.parse = function() {
        // do the parsing.
      };

      return CourseEventScraper;
    })(Scraper);

    /**
     * Creates and returns a new instance of Scraper
     * @param {Classroom} object The Classroom object that will be binded to the
     * scraper object.
     * @return {ClassroomScraper} The reference to the scraper object.
     * */
    function createClassroomScraper(object) {
      return new ClassroomScraper(object);
    }

    /**
     * Creates and returns a new instance of Scraper
     * @param {Course} object The Course object that will be binded to the
     * scraper object.
     * @return {CourseScraper} The reference to the scraper object.
     * */
    function createCourseScraper(object) {
      return new CourseScraper(object);
    }

    /**
     * Creates and returns a new instance of Scraper
     * @param {CourseEvent} object The CourseEvent object that will be binded
     * to the scraper object.
     * @return {CourseEventScraper} The reference to the scraper object.
     * */
    function createCourseEventScraper(object) {
      return new CourseEventScraper(object);
    }
    return factory;
  }
})();
