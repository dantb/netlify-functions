// Generated by purs version 0.13.4
"use strict";
var Control_Monad_Gen_Class = require("../Control.Monad.Gen.Class/index.js");
var Data_Date_Component = require("../Data.Date.Component/index.js");
var Data_Enum = require("../Data.Enum/index.js");
var Data_Enum_Gen = require("../Data.Enum.Gen/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var Data_Maybe = require("../Data.Maybe/index.js");
var genYear = function (dictMonadGen) {
    return Data_Functor.map((((dictMonadGen.Monad0()).Bind1()).Apply0()).Functor0())((function () {
        var $5 = Data_Maybe.fromJust();
        var $6 = Data_Enum.toEnum(Data_Date_Component.boundedEnumYear);
        return function ($7) {
            return $5($6($7));
        };
    })())(Control_Monad_Gen_Class.chooseInt(dictMonadGen)(1900)(2100));
};
var genWeekday = function (dictMonadGen) {
    return Data_Enum_Gen.genBoundedEnum(dictMonadGen)(Data_Date_Component.boundedEnumWeekday);
};
var genMonth = function (dictMonadGen) {
    return Data_Enum_Gen.genBoundedEnum(dictMonadGen)(Data_Date_Component.boundedEnumMonth);
};
var genDay = function (dictMonadGen) {
    return Data_Enum_Gen.genBoundedEnum(dictMonadGen)(Data_Date_Component.boundedEnumDay);
};
module.exports = {
    genYear: genYear,
    genMonth: genMonth,
    genDay: genDay,
    genWeekday: genWeekday
};
