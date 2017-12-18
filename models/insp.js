;
"use strict";
var Insp = ( function (){
  return {
    checkPositiveNum : function( val ){
      return (( val > 0 ) && (!isNaN(val))) ? val : 1;
    },

    checkNum : function( val ) {
      return (!isNaN(val)) ? val : 0;
    },

    aggregation : function ( child, parent ) {
      for (var key in parent.prototype) {
        child.prototype[key] = parent.prototype[key];
      }
    },

    _classCallCheck : function (instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
  }

})();