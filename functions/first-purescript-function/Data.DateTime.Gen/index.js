// Generated by purs version 0.13.4
"use strict";
var Control_Apply = require("../Control.Apply/index.js");
var Data_Date_Gen = require("../Data.Date.Gen/index.js");
var Data_DateTime = require("../Data.DateTime/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Time_Gen = require("../Data.Time.Gen/index.js");
var genDateTime = function (dictMonadGen) {
    return Control_Apply.apply(((dictMonadGen.Monad0()).Bind1()).Apply0())(Data_Functor.map((((dictMonadGen.Monad0()).Bind1()).Apply0()).Functor0())(Data_DateTime.DateTime.create)(Data_Date_Gen.genDate(dictMonadGen)))(Data_Time_Gen.genTime(dictMonadGen));
};
module.exports = {
    genDateTime: genDateTime
};
