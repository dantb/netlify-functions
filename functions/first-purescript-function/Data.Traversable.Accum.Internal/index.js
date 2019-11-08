// Generated by purs version 0.13.4
"use strict";
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Apply = require("../Control.Apply/index.js");
var Data_Functor = require("../Data.Functor/index.js");
var StateR = function (x) {
    return x;
};
var StateL = function (x) {
    return x;
};
var stateR = function (v) {
    return v;
};
var stateL = function (v) {
    return v;
};
var functorStateR = new Data_Functor.Functor(function (f) {
    return function (k) {
        return function (s) {
            var v = stateR(k)(s);
            return {
                accum: v.accum,
                value: f(v.value)
            };
        };
    };
});
var functorStateL = new Data_Functor.Functor(function (f) {
    return function (k) {
        return function (s) {
            var v = stateL(k)(s);
            return {
                accum: v.accum,
                value: f(v.value)
            };
        };
    };
});
var applyStateR = new Control_Apply.Apply(function () {
    return functorStateR;
}, function (f) {
    return function (x) {
        return function (s) {
            var v = stateR(x)(s);
            var v1 = stateR(f)(v.accum);
            return {
                accum: v1.accum,
                value: v1.value(v.value)
            };
        };
    };
});
var applyStateL = new Control_Apply.Apply(function () {
    return functorStateL;
}, function (f) {
    return function (x) {
        return function (s) {
            var v = stateL(f)(s);
            var v1 = stateL(x)(v.accum);
            return {
                accum: v1.accum,
                value: v.value(v1.value)
            };
        };
    };
});
var applicativeStateR = new Control_Applicative.Applicative(function () {
    return applyStateR;
}, function (a) {
    return function (s) {
        return {
            accum: s,
            value: a
        };
    };
});
var applicativeStateL = new Control_Applicative.Applicative(function () {
    return applyStateL;
}, function (a) {
    return function (s) {
        return {
            accum: s,
            value: a
        };
    };
});
module.exports = {
    StateL: StateL,
    stateL: stateL,
    StateR: StateR,
    stateR: stateR,
    functorStateL: functorStateL,
    applyStateL: applyStateL,
    applicativeStateL: applicativeStateL,
    functorStateR: functorStateR,
    applyStateR: applyStateR,
    applicativeStateR: applicativeStateR
};
