// Generated by purs version 0.13.4
"use strict";
var $foreign = require("./foreign.js");
var Data_Symbol = require("../Data.Symbol/index.js");
var Record_Unsafe = require("../Record.Unsafe/index.js");
var Type_Data_RowList = require("../Type.Data.RowList/index.js");
var ShowRecordFields = function (showRecordFields) {
    this.showRecordFields = showRecordFields;
};
var Show = function (show) {
    this.show = show;
};
var showString = new Show($foreign.showStringImpl);
var showRecordFieldsNil = new ShowRecordFields(function (v) {
    return function (v1) {
        return [  ];
    };
});
var showRecordFields = function (dict) {
    return dict.showRecordFields;
};
var showRecord = function (dictRowToList) {
    return function (dictShowRecordFields) {
        return new Show(function (record) {
            var v = showRecordFields(dictShowRecordFields)(Type_Data_RowList.RLProxy.value)(record);
            if (v.length === 0) {
                return "{}";
            };
            return $foreign.join(" ")([ "{", $foreign.join(", ")(v), "}" ]);
        });
    };
};
var showNumber = new Show($foreign.showNumberImpl);
var showInt = new Show($foreign.showIntImpl);
var showChar = new Show($foreign.showCharImpl);
var showBoolean = new Show(function (v) {
    if (v) {
        return "true";
    };
    if (!v) {
        return "false";
    };
    throw new Error("Failed pattern match at Data.Show (line 20, column 1 - line 22, column 23): " + [ v.constructor.name ]);
});
var show = function (dict) {
    return dict.show;
};
var showArray = function (dictShow) {
    return new Show($foreign.showArrayImpl(show(dictShow)));
};
var showRecordFieldsCons = function (dictIsSymbol) {
    return function (dictShowRecordFields) {
        return function (dictShow) {
            return new ShowRecordFields(function (v) {
                return function (record) {
                    var tail = showRecordFields(dictShowRecordFields)(Type_Data_RowList.RLProxy.value)(record);
                    var key = Data_Symbol.reflectSymbol(dictIsSymbol)(Data_Symbol.SProxy.value);
                    var focus = Record_Unsafe.unsafeGet(key)(record);
                    return $foreign.cons($foreign.join(": ")([ key, show(dictShow)(focus) ]))(tail);
                };
            });
        };
    };
};
module.exports = {
    Show: Show,
    show: show,
    ShowRecordFields: ShowRecordFields,
    showRecordFields: showRecordFields,
    showBoolean: showBoolean,
    showInt: showInt,
    showNumber: showNumber,
    showChar: showChar,
    showString: showString,
    showArray: showArray,
    showRecord: showRecord,
    showRecordFieldsNil: showRecordFieldsNil,
    showRecordFieldsCons: showRecordFieldsCons
};
