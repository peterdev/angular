describe('Testing the main controller', function() {
  var $scope, ctrl, $timeout;
  
  var _appModuleName = "TemplateApp"
  var controller = "MainController"

  // Reset state
  beforeEach(function (){
    
    // load the module you're testing.
    module(_appModuleName);
    
    // INJECT! This part is critical
    // $rootScope - injected to create a new $scope instance.
    // $controller - injected to create an instance of our controller.
    // $q - injected so we can create promises for our mocks.
    // _$timeout_ - injected to we can flush unresolved promises.
    inject(function($rootScope, $controller, $q, _$timeout_) {
      // create a scope object for us to use.
      $scope = $rootScope.$new();

      ctrl = $controller(controller, {
        $scope: $scope
      });
    });
  });

  
  // Test 1
  it('should start with foo and bar populated', function() {
    expect($scope.foo).toEqual('foo');
    expect($scope.bar).toEqual('bar');
  });
  
  it('should return "yoyo"', function (){

    // assert that it set $scope.fizz
    expect($scope.test1()).toEqual('hello-world');    
  });

  
  
  
});