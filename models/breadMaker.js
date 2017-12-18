"use strict";
var BreadMaker = function(){
  function BreadMaker ( name, program ) {
    Insp._classCallCheck(this, BreadMaker);

    this._name = name;

    Power.call( this );
    Insp.aggregation( BreadMaker, Power );

    Programs.call( this, program );
    Insp.aggregation( BreadMaker, Programs );

  }

  return BreadMaker;
}();

var bM = new BreadMaker( "Бош", breadMakerList );
console.dir( bM );
