factoryProvider.factory('general', function(){
  return {

    isEven:function(val, clb){
      if (val%2 == 0)
        clb(true);
      else
        clb(false);
    },

    isEvenSync:function(val){
      if (val%2 == 0)
        return true;
      else
        return false;
    }

  }
})