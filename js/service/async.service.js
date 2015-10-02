factoryProvider.factory('asyncService', function($timeout, $q){
  return {

    someAsyncCall: function (x){
      var deferred = $q.defer();
      $timeout(function (){
        deferred.resolve(x + '_async');
      }, 100);
      return deferred.promise;
    }

  };
});