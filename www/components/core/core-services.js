(function () {
  angular
  .module('wizzle.core', ['wizzle.utils'])
  .service('coreObjectSpec', [coreObjectSpec])
  .service('classRoomSpec', ['coreObjectSpec', classRoomSpec])
  .service('courseSpec', ['coreObjectSpec', courseSpec])
  .service('courseEventSpec', ['coreObjectSpec', courseEventSpec])
  .service('specFill', [specFill])
  .service('CoreFactory', ['deepCopy', 'specFill', 'classRoomSpec', 'courseEventSpec', 
           'courseSpec', 'coreObjectSpec', CoreFactory]);

  function coreObjectSpec () {
    return {
      "id": "",
      "url": "",
      "name": "",
      "dateScraped": ""
    };
  }

  function classRoomSpec (coreObjectSpec) {
    var spec = Object.create(coreObjectSpec);
    spec.organization = "";
    spec.platform = "";
    return spec;
  }

  function courseSpec (coreObjectSpec) {
    var spec = Object.create(coreObjectSpec);
    spec.teacherName = "";
    return spec;
  }

  function courseEventSpec (coreObjectSpec) {
    var spec = Object.create(coreObjectSpec);
    spec.datePublished = "";
    spec.publisher = "";
    spec.message = ""; 
    spec.eventTitle = "";
    spec.resources = "";
    return spec;
  }

  function CoreFactory (deepCopy, specFill, classRoomSpec, courseEventSpec, courseSpec) {

    var service = {
      createClassroom: createClassroom,
      createCourse: createCourse,
      createCourseEvent: createCourseEvent
    };

    function createClassroom () {
      return new Classroom();
    }

    function createCourse () {
      return new Course();
    }

    function createCourseEvent() {
      return new CourseEvent();
    }

    var CoreObject = {

      getName : function () {
        return this._getName();
      },

      getUrl : function () {
        return this._getUrl();
      },

      getDateScraped : function () {
        return this._getDate();
      },

      setData : function (dataobj) {
        this._setData(dataobj);
      },

      getSpec : function () {
        return this._getSpec();
      }

    };


    var Classroom = (function () {

      var Classroom = function (urlString) {
        var _spec = classRoomSpec;
        var _coursesList = [];
        var _data = {};
        var _url = urlString || "";

        this._getSpec = function () {return _spec; };
        this._getUrl = function () {return _url; };
        this._getName = function () {return _data.name;};
        this._setData = function (dataobj) {_data = specFill(_spec, dataob); };

        this._getAllCourses = function () { return deepCopy(_coursesList); };
        this._getCoursesById = function () { 
          var result = {};
          

        };

      };

      Classroom.prototype = Object.create(CoreObject);
      
      Classroom.prototype.getAllCourses = function () { 
        return deepCopy(coursesList);
      };

      Classroom.prototype.getCourseById = function (id) {
        return this;
      };

      Classroom.prototype.pushCourse = function (obj) {
        for (var prop in data) {
          data[prop] = obj[prop];
        }
      };

      return Classroom;

    })();

    
    var Course = (function () {
      
      var Course = function (url) {
        var _spec = courseSpec;
        var _data = {};
        var _url = urlString || "";
        var _courseEvents = [];
        
        this._getSpec = function () {return _spec; };
        this._getUrl = function () {return _url; };
        this._getName = function () {return _data.name;};
        this._setData = function (dataobj) {_data = specFill(_spec, dataob);};

        this._getTeacherName = function () {return _data.teacherName;};
        this._getAllEvents = function () {return deepCopy(_courseEvents);};
      };

      Course.prototype = Object.create(CoreObject);
      
      Course.prototype.getTeacherName = function () {
        return _data.teacherName;
      };

      Course.prototype.getAllEvents = function () {
        var tmp = deepCopy(courseEvents);
        return tmp;
      };

      Course.prototype.getEventById = function (id) {
        return deepCopy(courseEvents[id]);
      };

      Course.prototype.pushEvent = function (eventObj) {
        courseEvents.push(eventObj);
      };

      return Course;

    })();

    var CourseEvent = (function () {
      var CourseEvent = function (urlString) {
        var _spec = courseEventSpec;
        var _data = {};
        var _url = urlString || "";
        var _message = "";
        var _resources = {};

        this._getSpec = function () {return _spec; };
        this._getUrl = function () {return _url; };
        this._getName = function () {return _data.name;};
        this._setData = function (dataobj) {_data = specFill(_spec, dataob);};
      };

      CourseEvent.prototype = Object.create(CoreObject);

      return CourseEvent;
    })();

    return service;
  }

  function specFill (spec, obj) {
    var tmp = {};
    for (var prop in spec) {
      tmp[prop] = obj[prop];
    }
    return tmp;
  }
})();
