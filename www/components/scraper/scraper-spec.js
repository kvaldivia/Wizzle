/* global describe it beforeEach inject expect */
describe('Scraper Factory', function() {
  var coreFactory;
  var scraperFactory;
  this.coreObject = undefined;
  this.classroomScraper = undefined;
  this.courseScraper = undefined;
  this.courseEventScraper = undefined;

  beforeEach(module('wizzle.core'));
  beforeEach(module('wizzle.scraper'));
  beforeEach(module('wizzle.utils'));

  beforeEach(inject(function(_coreFactory_, _scraperFactory_) {
    coreFactory = _coreFactory_;
    scraperFactory = _scraperFactory_;
  }));

  describe('ClassroomScraper creation', function() {
    it('Creates a classroom scraper and loads the _data member with the ' +
       'given parameter', function() {
      this.coreObj = coreFactory.createClassroom();
      this.classroomScraper = scraperFactory.createClassroomScraper(
        this.coreObj);
      expect(this.classroomScraper).toBeDefined();
      // expect(this.classroomScraper.getData()).toBe(obj);
    });
  });

  describe('CourseScraper creation', function() {
    it('Creates a CourseScraper and loads the _data member with the ' +
       'given parameter', function() {
      this.coreObj = coreFactory.createCourse();
      this.courseScraper = scraperFactory.createCourseScraper(this.coreObj);
      expect(this.courseScraper).toBeDefined();
      // expect(this.clasroomScraper.getData()).toBe(obj);
    });
  });

  describe('CourseEventScraper creation', function() {
    it('Creates a CourseEventScraper and loads the _data member with the ' +
       'given parameter', function() {
      this.coreObj = coreFactory.createCourseEvent();
      this.courseEventScraper = scraperFactory.createCourseEventScraper(
        this.coreObj);
      expect(this.courseEventScraper).toBeDefined();
      // expect(this.courseScraper.getData()).toBe(obj);
    });
  });
});
