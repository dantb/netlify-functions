// Generated by purs version 0.13.4
"use strict";
var Data_Eq = require("../Data.Eq/index.js");
var Data_Newtype = require("../Data.Newtype/index.js");
var Data_Ord = require("../Data.Ord/index.js");
var Data_Show = require("../Data.Show/index.js");
var Data_String_NonEmpty_Internal = require("../Data.String.NonEmpty.Internal/index.js");
var CaseInsensitiveNonEmptyString = function (x) {
    return x;
};
var showCaseInsensitiveNonEmptyString = new Data_Show.Show(function (v) {
    return "(CaseInsensitiveNonEmptyString " + (Data_Show.show(Data_String_NonEmpty_Internal.showNonEmptyString)(v) + ")");
});
var newtypeCaseInsensitiveNonEmptyString = new Data_Newtype.Newtype(function (n) {
    return n;
}, CaseInsensitiveNonEmptyString);
var eqCaseInsensitiveNonEmptyString = new Data_Eq.Eq(function (v) {
    return function (v1) {
        return Data_Eq.eq(Data_String_NonEmpty_Internal.eqNonEmptyString)(Data_String_NonEmpty_Internal.toLower(v))(Data_String_NonEmpty_Internal.toLower(v1));
    };
});
var ordCaseInsensitiveNonEmptyString = new Data_Ord.Ord(function () {
    return eqCaseInsensitiveNonEmptyString;
}, function (v) {
    return function (v1) {
        return Data_Ord.compare(Data_String_NonEmpty_Internal.ordNonEmptyString)(Data_String_NonEmpty_Internal.toLower(v))(Data_String_NonEmpty_Internal.toLower(v1));
    };
});
module.exports = {
    CaseInsensitiveNonEmptyString: CaseInsensitiveNonEmptyString,
    eqCaseInsensitiveNonEmptyString: eqCaseInsensitiveNonEmptyString,
    ordCaseInsensitiveNonEmptyString: ordCaseInsensitiveNonEmptyString,
    showCaseInsensitiveNonEmptyString: showCaseInsensitiveNonEmptyString,
    newtypeCaseInsensitiveNonEmptyString: newtypeCaseInsensitiveNonEmptyString
};
