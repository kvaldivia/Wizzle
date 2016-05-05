/* global angular */
(function() {
  angular
  .module('wizzle.core', ['wizzle.utils'])
  .factory('specFactory', [SpecFactory])
  .service('specFill', [specFill])
  .factory('coreFactory', ['utilities', 'specFill', 'specFactory',
           coreFactory]);

  function SpecFactory() {
    var factory = {
      classroomSpec: classroomSpec,
      courseSpec: courseSpec,
      courseEventSpec: courseEventSpec
    };

    function coreObjectSpec() {
      return {
        id: "",
        url: "",
        name: "",
        dateScraped: ""
      };
    }

    function classroomSpec() {
      var spec = Object.create(coreObjectSpec());
      spec.organization = "";
      spec.platform = "";
      return spec;
    }

    function courseSpec() {
      var spec = Object.create(coreObjectSpec());
      spec.teacherName = "";
      return spec;
    }

    function courseEventSpec() {
      var spec = Object.create(coreObjectSpec());
      spec.datePublished = "";
      spec.publisher = "";
      spec.message = "";
      spec.eventTitle = "";
      spec.resources = "";
      return spec;
    }
    return factory;
  }

  function coreFactory(utilities, specFill, specFactory) {
    var factory = {
      createClassroom: createClassroom,
      createCourse: createCourse,
      createCourseEvent: createCourseEvent
    };

    var CoreObject = {

      getName: function() {
        return this._data.name;
      },

      getUrl: function() {
        return this._url;
      },

      getDateScraped: function() {
        return this._data.dateScraped;
      },

      setData: function(dataobj) {
        this.setData(dataobj);
      },

      getSpec: function() {
        return this._spec;
      }
    };

    var Classroom = (function() {
      var Classroom = function(urlString) {
        this._spec = specFactory.classroomSpec();
        this._coursesList = [];
        this._data = {};
        this._url = urlString || "";
      };

      Classroom.prototype = Object.create(CoreObject);
      Classroom.prototype.constructor = Classroom;

      Classroom.prototype.getAllCourses = function() {
        return utilities.deepCopy(this.coursesList);
      };

      Classroom.prototype.getCourseById = function(id) {
        return id;
      };

      Classroom.prototype.pushCourse = function(obj) {
        for (var prop in this.data) {
          this.data[prop] = obj[prop];
        }
      };
      return Classroom;
    })();

    var Course = (function() {
      var Course = function(urlString) {
        this._spec = specFactory.courseSpec();
        this._data = {};
        this._url = urlString || "";
        this._courseEvents = [];
      };

      Course.prototype = Object.create(CoreObject);
      Course.prototype.constructor = Course;

      Course.prototype.getTeacherName = function() {
        return this._data.teacherName;
      };

      Course.prototype.getAllEvents = function() {
        var tmp = utilities.deepCopy(this._courseEvents);
        return tmp;
      };

      Course.prototype.getEventById = function(eventId) {
        return utilities.deepCopy(this._courseEvents[eventId]);
      };

      Course.prototype.pushEvent = function(eventObj) {
        this._courseEvents.push(eventObj);
      };
      return Course;
    })();

    var CourseEvent = (function() {
      var CourseEvent = function(urlString) {
        this._spec = specFactory.courseEventSpec();
        this._data = {};
        this._url = urlString || "";
        this._message = "";
        this._resources = {};
      };

      CourseEvent.prototype = Object.create(CoreObject);
      CourseEvent.prototype.constructor = CourseEvent;

      CourseEvent.prototype.getMessage = function() {
        return this._message;
      };

      CourseEvent.prototype.setMessage = function(msg) {
        this._message = msg;
      };

      return CourseEvent;
    })();

    function createClassroom(urlString) {
      return new Classroom(urlString);
    }

    function createCourse(urlString) {
      return new Course(urlString);
    }

    function createCourseEvent(urlString) {
      return new CourseEvent(urlString);
    }
    return factory;
  }

  function specFill(spec, obj) {
    var tmp = {};
    for (var prop in spec) {
      tmp[prop] = obj[prop];
    }
    return tmp;
  }
})();
