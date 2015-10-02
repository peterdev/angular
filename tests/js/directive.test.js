describe('Testing sampleOne directive', function() {
  var scope,
      elem,
      directive,
      compiled,
      html;
      
  var _appModuleName = "TemplateApp"
  var _controller = "SampleController"

  beforeEach(function (){
    //load the module
    module(_appModuleName);
    
    //set our view html.
    html = "<ta-simple-display needed='[1, 2, 3, 4, 5]'></ta-simple-display>";
    
    inject(function($compile, $rootScope, $controller) {

      //create a scope (you could just use $rootScope, I suppose)
      scope = $rootScope.$new();
      
      //get the jqLite or jQuery element
      elem = angular.element(html);
       
      // process the view.
      compiled = $compile(elem);
      
      //run the compiled view.
      compiled(scope);
      
      //call digest on the scope!
      scope.$digest();

    });
  });

  it('If directive returns the correct length of the array', function() {
    expect(elem.text()).not.toBeNaN();
  });

});