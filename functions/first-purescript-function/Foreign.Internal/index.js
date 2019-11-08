// Generated by purs version 0.13.4
"use strict";
var Control_Applicative = require("../Control.Applicative/index.js");
var Control_Monad_Except_Trans = require("../Control.Monad.Except.Trans/index.js");
var Data_Boolean = require("../Data.Boolean/index.js");
var Data_Identity = require("../Data.Identity/index.js");
var Foreign = require("../Foreign/index.js");
var isObject = function (v) {
    return Foreign.tagOf(v) === "Object";
};
var readObject = function (value) {
    if (isObject(value)) {
        return Control_Applicative.pure(Control_Monad_Except_Trans.applicativeExceptT(Data_Identity.monadIdentity))(Foreign.unsafeFromForeign(value));
    };
    if (Data_Boolean.otherwise) {
        return Foreign.fail(new Foreign.TypeMismatch("Object", Foreign.tagOf(value)));
    };
    throw new Error("Failed pattern match at Foreign.Internal (line 13, column 1 - line 13, column 44): " + [ value.constructor.name ]);
};
module.exports = {
    isObject: isObject,
    readObject: readObject
};
