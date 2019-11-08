// Generated by purs version 0.13.4
"use strict";
var Data_Eq = require("../Data.Eq/index.js");
var Data_Newtype = require("../Data.Newtype/index.js");
var Data_Ord = require("../Data.Ord/index.js");
var Data_Show = require("../Data.Show/index.js");
var Replacement = function (x) {
    return x;
};
var Pattern = function (x) {
    return x;
};
var showReplacement = new Data_Show.Show(function (v) {
    return "(Replacement " + (Data_Show.show(Data_Show.showString)(v) + ")");
});
var showPattern = new Data_Show.Show(function (v) {
    return "(Pattern " + (Data_Show.show(Data_Show.showString)(v) + ")");
});
var newtypeReplacement = new Data_Newtype.Newtype(function (n) {
    return n;
}, Replacement);
var newtypePattern = new Data_Newtype.Newtype(function (n) {
    return n;
}, Pattern);
var eqReplacement = new Data_Eq.Eq(function (x) {
    return function (y) {
        return x === y;
    };
});
var ordReplacement = new Data_Ord.Ord(function () {
    return eqReplacement;
}, function (x) {
    return function (y) {
        return Data_Ord.compare(Data_Ord.ordString)(x)(y);
    };
});
var eqPattern = new Data_Eq.Eq(function (x) {
    return function (y) {
        return x === y;
    };
});
var ordPattern = new Data_Ord.Ord(function () {
    return eqPattern;
}, function (x) {
    return function (y) {
        return Data_Ord.compare(Data_Ord.ordString)(x)(y);
    };
});
module.exports = {
    Pattern: Pattern,
    Replacement: Replacement,
    eqPattern: eqPattern,
    ordPattern: ordPattern,
    newtypePattern: newtypePattern,
    showPattern: showPattern,
    eqReplacement: eqReplacement,
    ordReplacement: ordReplacement,
    newtypeReplacement: newtypeReplacement,
    showReplacement: showReplacement
};
