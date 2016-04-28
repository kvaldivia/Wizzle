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
        return this.getName();
      },

      getUrl : function () {
        return this.getUrl();
      },

      getDateScraped : function () {
        return this.getDate();
      },

      setData : function (dataobj) {
        this.setData(dataobj);
      },

      getSpec : function () {
        return this.getSpec();
      }

    };


    var Classroom = (function () {

      var Classroom = function (urlString) {
        var _spec = classRoomSpec;
        var _coursesList = {};
        var _data = {};
        var _url = urlString || "";

        this._spec = function () {return _spec; };
      };

      Classroom.prototype = Object.create(CoreObject);
      
      Classroom.prototype.getName = function () { 
        return _data.name; 
      };

      Classroom.prototype.getUrl = function () { 
        return _url; 
      };

      Classroom.prototype.getDateScraped = function () {
        return _data.dateScraped;
      };

      Classroom.prototype.setData = function (dataObj) {
        _data = specFill(_spec, dataObj);
      };



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
      };

      Course.prototype = Object.create(CoreObject);
      
      Course.prototype.getName = function () {
        return CoreObject.prototype.getName.call(this);
      };

      Course.prototype.getUrl = function () {
        return CoreObject.prototype.getUrl.call(this);
      };

      Course.prototype.getDateScraped = function () {
        return CoreObject.prototype.getDateScraped.call(this);
      };

      Course.prototype.getSpec = function () {
        return CoreObject.prototype.getSpec.call(this);
      };

      Course.prototype.setData = function (dataObj) {
        return CoreObject.prototype.setData.call(this, dataObj);
      };


      Course.prototype.getTeacherName = function () {
        return data.teacherName;
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
      };

      CourseEvent.prototype = Object.create(CoreObject);

      CourseEvent.prototype.getName = function () {
        return CoreObject.prototype.getName.call(this);
      };

      CourseEvent.prototype.getUrl = function () {
        return CoreObject.prototype.getUrl.call(this);
      };

      CourseEvent.prototype.getDateScraped = function () {
        return CoreObject.prototype.getDateScraped.call(this);
      };

      CourseEvent.prototype.getSpec = function () {
        return CoreObject.prototype.getSpec.call(this);
      };

      CourseEvent.prototype.setData = function (dataObj) {
        return CoreObject.prototype.setData.call(this, dataObj);
      };

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
