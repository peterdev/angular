describe('basicService tests', function (){
  var basicService;
  
  var _appModuleName = "TemplateApp"
  var _controller = "SampleController"

  // excuted before each "it" is run.
  beforeEach(function (){
    
    // load the module.
    module(_appModuleName);
    
    // inject your service for testing.
    // The _underscores_ are a convenience thing
    // so you can have your variable name be the
    // same as your injected service.
    inject(function(general) {
      basicService = general;
    });
  });
     
  // check to see if it has the expected function
  it('sync is even', function () { 
    expect(angular.isFunction(basicService.isEvenSync(2))).not.toBeNaN();
  });
  
  it('async is even', function () { 
    expect(angular.isFunction(basicService.isEven(2))).not.toBeNaN();
  });

  // check to see if it does what it's supposed to do.
  /*it('should make text exciting', function (){
    var result = basicService.exciteText('bar');
    expect(result).toBe('bar!!!');
  });*/
});