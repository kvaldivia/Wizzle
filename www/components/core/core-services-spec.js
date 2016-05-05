/* global describe expect it beforeEach inject */
describe('CoreServices', function() {
  beforeEach(module('wizzle.core'));

  var coreFactory;

  beforeEach(inject(function(_coreFactory_) {
    coreFactory = _coreFactory_;
    this.classroom = undefined;
    this.course = undefined;
    this.courseEvent = undefined;
  }));

  describe('Classroom object creation', function() {
    it('Creates a Classroom object and returns the reference to it.',
    function() {
      this.classroom = coreFactory.createClassroom();
      expect(typeof this.classroom).toEqual('object');
    });

    it('Loads _url member with "" if no value is passed, otherwise the' +
       'passed value is loaded', function() {
      this.classroom = coreFactory.createClassroom();
      expect(this.classroom.getUrl()).toEqual('');

      this.classroom = coreFactory.createClassroom(
        'http://aulavirtual.ucsm.edu.pe/epregrado2015II/login/index.php'
      );
      expect(this.classroom.getUrl()).toEqual(
        'http://aulavirtual.ucsm.edu.pe/epregrado2015II/login/index.php'
      );
    });
  });

  describe('Course object creation', function() {
    it('Creates a Course object and returns the reference to it.', function() {
      this.course = coreFactory.createCourse();
      expect(typeof this.course).toEqual('object');
    });
    it('Loads _url member with "" if no value is passed, otherwise the ' +
       'passed value is loaded', function() {
      this.course = coreFactory.createCourse();
      expect(this.course.getUrl()).toEqual('');
      this.course = coreFactory.createCourse(
        'http://aulavirtual.ucsm.edu.pe/epregrado2015II/course/view.php'
      );
      expect(this.course.getUrl()).toEqual(
        'http://aulavirtual.ucsm.edu.pe/epregrado2015II/course/view.php'
      );
    });
  });

  describe('CourseEvent object creation', function() {
    it('Creates a CourseEvent object and returns the reference to it.',
    function() {
      this.courseEvent = coreFactory.createCourseEvent();
      expect(typeof this.courseEvent).toEqual('object');
    });
    it('Loads _url member with "" if no value is passed, otherwise the ' +
       'passed value is loaded', function() {
      this.courseEvent = coreFactory.createCourseEvent();
      expect(this.courseEvent.getUrl()).toEqual('');
      this.courseEvent = coreFactory.createCourseEvent(
        'http://aulavirtual.ucsm.edu.pe/epregrado2015II/'
      );
      expect(this.courseEvent.getUrl()).toEqual(
        'http://aulavirtual.ucsm.edu.pe/epregrado2015II/'
      );
    });
  });
});
