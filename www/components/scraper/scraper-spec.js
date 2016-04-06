describe('Scraper.WebPage', function() {
  beforeEach(module('wizzle'));

  it('should download html file from web page', inject(function($controller) {
    var scope = {},
        ctrl = $controller('FetchWebPage', {$scope:scope});

    expect(scope.header.code).toBe(200);
  }));

  it('should be able to sent post requests to the targeted website', inject(function($controller){
    //TODO: write actual test
  }));

  it('should save the html file in local storage', inject(function($controller){
    //TODO: write actual test
  }));

  it('should strip the web page and build a WebPage object', inject(function($controller){
    //TODO: write actual test
  }));

  it('should "attach" the WebPage object to the WebPageTracker object', inject(function($controller){
    //TODO: write actual test
  }));

});
