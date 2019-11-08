// Generated by purs version 0.13.4
"use strict";
var $foreign = require("./foreign.js");
var Data_Functor = require("../Data.Functor/index.js");
var Effect = require("../Effect/index.js");
var Effect_Unsafe = require("../Effect.Unsafe/index.js");
var Node_Express_App = require("../Node.Express.App/index.js");
var buildApp = function (appActions) {
    return function __do() {
        var v = $foreign.makeApplication();
        Node_Express_App.apply(appActions)(v)();
        return v;
    };
};
var makeHandler = function (appActions) {
    return Effect_Unsafe.unsafePerformEffect(Data_Functor.map(Effect.functorEffect)($foreign.proxy)(Data_Functor.map(Effect.functorEffect)($foreign.createServer)(buildApp(appActions))));
};
module.exports = {
    makeHandler: makeHandler
};
